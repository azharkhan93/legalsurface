// utils/notion.ts
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  return response.results.map((page: any) => {
    const file =
      page.properties["Files & media"]?.files?.[0]?.type === "external"
        ? page.properties["Files & media"].files[0].external.url
        : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

    const title = page.properties.Name?.title?.[0]?.plain_text || "";
    const description =
      page.properties.Description?.multi_select
        ?.map((item: any) => item.name)
        .join(", ") || "";

    return {
      id: page.id,
      title,
      file,
      description,
    };
  });
}
