import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const blogPosts = await Promise.all(
      response.results.map(async (page: any) => {
        const slug = page.properties["slug"]?.rich_text?.[0]?.plain_text || "";
        const file =
          page.properties["Files & media"]?.files?.[0]?.type === "external"
            ? page.properties["Files & media"].files[0].external.url
            : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

        const title =
          page.properties["Title"]?.title?.[0]?.plain_text ||
          page.properties["Name"]?.title?.[0]?.plain_text ||
          "";
        const description1 =
          page.properties["Description"].rich_text[0]?.plain_text || "";

        const createdDate = page.properties["Created"]?.created_time || "";

        const descriptionBlocks = await getPageContent(page.id);
        const richTextData = extractRichText(descriptionBlocks);

        const description = richTextData.join(" ") || "";

        const createdBy =
          page.properties["Created by"]?.people
            ?.map((person: any) => person.name)
            .join(", ") || "";

        const status = page.properties["Status"]?.status?.name || "";

        return {
          id: page.id,
          title,
          file,
          description,
          description1,
          createdDate,
          createdBy,
          status,
          slug,
        };
      })
    );

    return blogPosts;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw new Error("Failed to fetch blog posts.");
  }
}

async function getPageContent(pageId: string) {
  const blocks: any[] = [];
  let cursor: string | undefined = undefined;

  do {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    blocks.push(...results);
    cursor = next_cursor ?? undefined;
  } while (cursor);

  return blocks;
}

function extractRichText(blocks: any[]): string[] {
  return blocks.map((block) => {
    try {
      switch (block.type) {
        case "heading_1":
        case "heading_2":
        case "heading_3":
        case "paragraph":
          return (
            block[block.type]?.rich_text
              ?.map((text: any) => {
                if (text.type === "text") {
                  const content = text.text.content;
                  const urlPattern = /(https?:\/\/[^\s]+)/g;
                  const processedContent = content.replace(
                    urlPattern,
                    (url: any) =>
                      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
                  );
                  return processedContent;
                }
                return "";
              })
              .join(" ") || ""
          );
        case "image":
          const imageUrl =
            block.image?.file?.url || block.image?.external?.url || "";
          return imageUrl
            ? `<img src="${imageUrl}" alt="Image" style="max-width: 100%; height: auto;" />`
            : "";
        case "embed":
        case "url":
          const embedUrl = block[block.type]?.url || "";
          return embedUrl
            ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer">${embedUrl}</a>`
            : "";
        default:
          return "Unsupported block type";
      }
    } catch (error) {
      console.error("Error processing block:", block, error);
      return "Error processing block";
    }
  });
}

// function extractRichText(blocks: any[]): string[] {
//   return blocks.map((block) => {
//     try {
//       switch (block.type) {
//         case "heading_1":
//         case "heading_2":
//         case "heading_3":
//         case "paragraph":
//           return block[block.type]?.rich_text?.map((text: any) => {
//             if (text.type === "text") {
//               return text.text.content;
//             }
//             return "";
//           }).join(" ") || "";
//         case "image":
//           const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
//           return imageUrl ? `<img src="${imageUrl}" alt="Image" style="max-width: 40%; height: auto;" />` : "";
//         case "embed":
//         case "url":
//           const embedUrl = block[block.type]?.url || "";
//           return embedUrl ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer">${embedUrl}</a>` : "";
//         default:
//           return "Unsupported block type";
//       }
//     } catch (error) {
//       console.error("Error processing block:", block, error);
//       return "Error processing block";
//     }
//   });
// }

// function extractRichText(blocks: any[]): string[] {
//   return blocks.map((block) => {
//     try {
//       switch (block.type) {
//         case "heading_1":
//         case "heading_2":
//         case "heading_3":
//         case "paragraph":
//           return block[block.type].rich_text?.map((text: any) => text.plain_text).join(" ") || "";
//         case "image":
//           const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
//           return imageUrl ? `Image: ${imageUrl}` : "Image block without URL";
//         case "url":
//           return block[block.type].rich_text?.map((text: any) => text.plain_text).join(" ") || "";
//         default:
//           return "Unsupported block type";
//       }
//     } catch (error) {
//       console.error("Error processing block:", block, error);
//       return "Error processing block";
//     }
//   });
// }
