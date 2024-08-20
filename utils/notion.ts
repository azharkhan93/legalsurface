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

        // console.log("here is the data", richTextData);

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

  // console.log("Fetched blocks:", blocks);
  return blocks;
}

function extractRichText(blocks: any[]): string[] {
  return blocks.map((block) => {
    try {
      switch (block.type) {
        case "heading_1":
          return `<h1 style="margin-bottom: 20px; font-size: 28px;">${processRichText(block.heading_1.rich_text)}</h1>`;
        case "heading_2":
          return `<h2 style="margin-bottom: 18px; font-size: 24px; font-weight: bold;">${processRichText(block.heading_2.rich_text)}</h2>`;
        case "heading_3":
          return `<h3 style="margin-bottom: 16px; font-size: 20px; font-weight: bold;">${processRichText(block.heading_3.rich_text)}</h3>`;
        case "paragraph":
          return `<p style="margin-bottom: 14px; font-size: 16px;">${processRichText(block.paragraph.rich_text)}</p>`;
        case "image":
          const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
          return imageUrl
            ? `<img src="${imageUrl}" alt="Image" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px; border-radius: 20px;" />`
            : "";
        case "embed":
        case "url":
          const embedUrl = block[block.type]?.url || "";
          return embedUrl
            ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
            : "";
        default:
          return "<p style='margin-bottom: 14px;'>Unsupported block type</p>";
      }
    } catch (error) {
      console.error("Error processing block:", block, error);
      return "<p style='margin-bottom: 14px;'>Error processing block</p>";
    }
  });
}

function processRichText(richTextArray: any[]): string {
  return richTextArray
    .map((text) => {
      if (text.type === "text") {
        const content = text.text.content;
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const processedContent = content.replace(
          urlPattern,
          (url: string) => `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`
        );

        // console.log("Processed rich text:", { original: content, processed: processedContent });

        return processedContent;
      }
      return "";
    })
    .join(" ");
}


