import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  // Query the Notion database for blog posts
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  // Process each page (blog post) from the response
  const blogPosts = await Promise.all(
    response.results.map(async (page: any) => {
      // Extract the slug, file URL, title, created date, and created by information
      const slug = page.properties["slug"]?.rich_text?.[0]?.plain_text || "";
      const file =
        page.properties["Files & media"]?.files?.[0]?.type === "external"
          ? page.properties["Files & media"].files[0].external.url
          : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

      const title =
        page.properties["Title"]?.title?.[0]?.plain_text ||
        page.properties["Name"]?.title?.[0]?.plain_text ||
        "";

      const createdDate = page.properties["Created"]?.created_time || "";
      
      // Fetch and process the content blocks for the description
      const descriptionBlocks = await getPageContent(page.id);
      const richTextData = extractRichText(descriptionBlocks);

      // Handle the case where descriptionBlocks might be empty or invalid
      const description = richTextData.join(' ') || ""; // Ensure it's a string or empty

      const createdBy =
        page.properties["Created by"]?.people?.map((person: any) => person.name).join(", ") || "";

      const status = page.properties["Status"]?.status?.name || "";

      // Console log the extracted rich text content
      console.log(`Rich Text for post "${title}" (${slug}):`, richTextData);

      // Return the processed blog post data
      return {
        id: page.id,
        title,
        file,
        description,
        createdDate,
        createdBy,
        status,
        slug,
      };
    })
  );

  return blogPosts;
}

// Function to fetch the blocks (content) of a page
async function getPageContent(pageId: string) {
  const blocks = [];
  let cursor: string | undefined = undefined;

  do {
    // Fetch child blocks of the page
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    blocks.push(...results);
    cursor = next_cursor;
  } while (cursor);

  return blocks;
}

// Function to extract rich text data from blocks
function extractRichText(blocks: any[]): string[] {
  return blocks.map(block => {
    switch (block.type) {
      case 'heading_1':
      case 'heading_2':
      case 'paragraph':
        return block[block.type].rich_text.map((text: any) => text.plain_text).join(' ');
      case 'image':
        // For images, you might want to handle them differently, e.g., return an empty string or a specific placeholder
        return '';
      default:
        // Handle unsupported block types
        return 'Unsupported block type';
    }
  });
}






// export async function getProducts(categoryFilter: string) {
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_PRODUCTS_DATABASE_ID!,
//   });

//   return response.results
//     .map((page: any) => {
//       const imageUrl =
//         page.properties["Files & media"]?.files?.[0]?.type === "external"
//           ? page.properties["Files & media"].files[0].external.url
//           : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

//       const productName =
//         page.properties["Title"]?.rich_text?.[0]?.plain_text ||
//         page.properties["Name"]?.title?.[0]?.plain_text ||
//         "";

//       const productDes =
//         page.properties["Service"]?.rich_text?.[0].plain_text || "";

//       const price = page.properties["Price"]?.number || 0;

//       const category = page.properties["Category"]?.select?.name || "";

//       return {
//         imageUrl,
//         productName,
//         productDes,
//         price, 
//         category,
//       };
//     })
//     .filter(
//       (product) =>
//         product.category.toLowerCase() === categoryFilter.toLowerCase()
//     );
// }
