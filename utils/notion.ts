import { notion } from "./notionClient";
import { extractRichText } from "./richText";

export async function getBlogPosts() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });

    const blogPosts = await Promise.all(
      response.results.map(async (page: any) => {
        console.log("Raw page data:", page);
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
