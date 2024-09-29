import { BASE_TEXT_VARIANTS } from "@/theme";

function lazyLoadImage(url: string, width?: number, height?: number) {
  return `<img src="${url}" alt="Image" loading="lazy" class="lazy-image" style="border-radius: 8px; ${
    width ? `width: ${width}px;` : ""
  } ${height ? `height: ${height}px;` : ""}" />`;
}

export function extractRichText(blocks: any[]): string[] {
  let lastHeading = "";
  let contentGroupHtml: string[] = [];
  let currentContent: string[] = [];
  let currentImages: string[] = [];
  let isRowReverse = false;
  let inList = false;
  let listType = ''; 

  blocks.forEach((block, index) => {
    try {
      switch (block.type) {
        case "heading_1":
        case "heading_2":
        case "heading_3":
          if (inList) {
            currentContent.push(listType === 'ordered' ? "</ol>" : "</ul>");
            inList = false;
          }
          lastHeading = processRichText(block[block.type].rich_text);
          const headingLevel = block.type.replace("heading_", "h");
          const headingStyle = getHeadingStyle(block.type);

          currentContent.push(
            `<${headingLevel} style="${headingStyle} margin: 0;">${lastHeading}</${headingLevel}>`
          );
          break;

        case "paragraph":
          const paragraphText = processRichText(block.paragraph.rich_text);
          if (paragraphText.trim()) {
            currentContent.push(
              `<p style="font-family: ${BASE_TEXT_VARIANTS.body.fontFamily}; font-size: ${BASE_TEXT_VARIANTS.body.fontSize}px; line-height: 1.5; margin: 0;">${paragraphText}</p>`
            );
          }
          break;

        case "bulleted_list_item":
          if (!inList || listType !== 'unordered') {
            if (inList) currentContent.push(listType === 'ordered' ? "</ol>" : "</ul>");
            currentContent.push("<ul>");
            inList = true;
            listType = 'unordered';
          }
          const bulletedItemText = processRichText(block.bulleted_list_item.rich_text);
          currentContent.push(`<li>${bulletedItemText}</li>`);
          break;

        case "numbered_list_item":
          if (!inList || listType !== 'ordered') {
            if (inList) currentContent.push(listType === 'ordered' ? "</ol>" : "</ul>");
            currentContent.push("<ol>");
            inList = true;
            listType = 'ordered';
          }
          const numberedItemText = processRichText(block.numbered_list_item.rich_text);
          currentContent.push(`<li>${numberedItemText}</li>`);
          break;

        case "image":
          if (inList) {
            currentContent.push(listType === 'ordered' ? "</ol>" : "</ul>");
            inList = false;
          }
          const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
          if (imageUrl) {
            const lazyImageHtml = lazyLoadImage(imageUrl);
            currentImages.push(lazyImageHtml);
          }
          break;

        case "embed":
        case "url":
          if (inList) {
            currentContent.push(listType === 'ordered' ? "</ol>" : "</ul>");
            inList = false;
          }
          const embedUrl = block[block.type]?.url || "";
          if (embedUrl) {
            currentContent.push(
              `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
            );
          }
          break;

        default:
          currentContent.push(
            `<p style='color: red;'>Unsupported block type: ${block.type}</p>`
          );
      }

      // Ensure the last image is captured before ending
      if (index === blocks.length - 1 || block.type === "image") {
        if (currentContent.length > 0 || currentImages.length > 0) {
          contentGroupHtml.push(
            buildContentImageHtml(currentContent, currentImages, isRowReverse)
          );
          resetState();
        }
      }

    } catch (error) {
      console.error("Error processing block:", block, error);
      currentContent.push(
        "<p style='margin-bottom: 14px;'>Error processing block</p>"
      );
    }
  });

  // Handle any remaining content at the end of the loop
  if (currentContent.length > 0 || currentImages.length > 0) {
    contentGroupHtml.push(
      buildContentImageHtml(currentContent, currentImages, isRowReverse)
    );
  }

  return [
    `<div class="content-wrapper">${contentGroupHtml.join("")}</div>`,
    getStyles(),
  ];

  function resetState() {
    currentContent = [];
    currentImages = [];
    isRowReverse = !isRowReverse;
    inList = false;
    listType = '';
  }

  function getHeadingStyle(type: string): string {
    switch (type) {
      case "heading_1":
        return `font-size: ${BASE_TEXT_VARIANTS.heading.fontSize}px; font-family: ${BASE_TEXT_VARIANTS.heading.fontFamily};`;
      case "heading_2":
      case "heading_3":
        return `font-size: ${BASE_TEXT_VARIANTS.subHeading.fontSize}px; font-family: ${BASE_TEXT_VARIANTS.subHeading.fontFamily};`;
      default:
        return "";
    }
  }
}



function buildContentImageHtml(
  content: string[],
  images: string[],
  isReversed: boolean
): string {
  return `<div class="content-images-container ${
    isReversed ? "row-reverse" : ""
  }">
            <div class="content">${content.join("")}</div>
            <div class="images">${images.join("")}</div>
          </div>`;
}

function buildImagesRowHtml(images: string[]): string {
  return `<div class="images-row">
            ${images.join("")}
          </div>`;
}

function processRichText(richTextArray: any[]): string {
  return richTextArray
    .map((text) => {
      if (text.type === "text") {
        const content = text.text.content;
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return content.replace(
          urlPattern,
          (url: string) =>
            `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`
        );
      }
      return "";
    })
    .join(" ");
}

function getStyles(): string {
  return `<style>
    .lazy-image {
      margin-bottom: 10px;
      max-width: 100%;
      height: auto;
    }
    .images-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px; 
    }
    .images-row img {
      width: 500px;
      height: 500px; 
    }
    ul {
      margin: 0;
      padding-left: 20px;
    }
    ul li {
      margin-bottom: 10px; /* Add space between list items */
    }
    @media (max-width: 768px) {
      .content-images-container {
        display: flex;
        flex-direction: column;
      }
      .content, .images {
        width: 100%;
        margin: 20px 0;
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;
      }
    }
    @media (min-width: 769px) {
      .content-images-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .row-reverse {
        flex-direction: row-reverse;
      }
      .content, .images {
        width: 80%;
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
  </style>`;
}



