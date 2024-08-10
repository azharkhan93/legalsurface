import { Client } from '@notionhq/client';


type NotionTitleProperty = {
  title: Array<{ text: { content: string } }>;
}

type NotionFileProperty = {
  files: Array<{ file: { url: string } }>;
}

type NotionMultiSelectProperty = {
  multi_select: Array<{ name: string }>;
}

type NotionPageProperties = {
  Title: NotionTitleProperty;
  'Files & media': NotionFileProperty;
  Description: NotionMultiSelectProperty;
}


type BlogPost = {
  id: string;
  title: string;
  file?: string;
  description: string;
}


const notion = new Client({ auth: process.env.NOTION_API_KEY });


function isPageObject(response: any): response is { properties: NotionPageProperties; id: string } {
  return response && 'properties' in response && 'id' in response;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not defined');
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    console.log('Raw response:', response);

    const results = response.results as any[];

    const blogPosts: BlogPost[] = [];

    for (const page of results) {
      if (isPageObject(page)) {
        const properties = page.properties as NotionPageProperties;
        const title = properties.Title?.title?.[0]?.text?.content || '';
        // Extract file URL
        const file = properties['Files & media']?.files?.[0]?.file?.url || '';
        // Extract description
        const description = properties.Description?.multi_select?.[0]?.name || '';

        // Check for valid data
        if (title && description) {
          console.log('Extracted data:', { title, file, description });

          blogPosts.push({
            id: page.id,
            title,
            file,
            description,
          });
        }
      }
    }

    console.log('Blog Posts:', blogPosts);
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts');
  }
}


  
  
  













