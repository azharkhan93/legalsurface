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

export async function getProducts(categoryFilter: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PRODUCTS_DATABASE_ID!,
  });

  return response.results
    .map((page: any) => {
      const imageUrl =
        page.properties["Files & media"]?.files?.[0]?.type === "external"
          ? page.properties["Files & media"].files[0].external.url
          : page.properties["Files & media"]?.files?.[0]?.file?.url || "";

      const productName =
        page.properties["Title"]?.rich_text?.[0]?.plain_text ||
        page.properties["Name"]?.title?.[0]?.plain_text ||
        "";

      const productDes =
        page.properties["Service"]?.multi_select
          ?.map((item: any) => item.name)
          .join(", ") || "";

      const price = page.properties["Price"]?.number || 0;

      const category = page.properties["Category"]?.select?.name || "";

      return {
        imageUrl,
        productName,
        productDes,
        price: `₹${price.toLocaleString("en-IN")}`,
        category,
      };
    })
    .filter(
      (product) =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
    );
}

// console.log("Image URL:", imageUrl);
// console.log("Title:", productName);
// console.log("Description:", productDes);
// console.log("Price:", `₹${price.toLocaleString('en-IN')}`);

// export async function getProducts() {
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_PRODUCTS_DATABASE_ID!,
//   });

//   return response.results.map((page: any) => {
//     const price = page.properties["Price"]?.number || 0;

//     return {
//       imageUrl: page.properties["Image URL"]?.files?.[0]?.file?.url || "",
//       productName: page.properties["Product Name"]?.title?.[0]?.plain_text || "",
//       productDes: page.properties["Product Description"]?.rich_text?.[0]?.plain_text || "",
//       price: `₹${price.toLocaleString('en-IN')}`,
//     };
//   });
// }
