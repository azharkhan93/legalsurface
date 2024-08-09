import { notionApi } from ".";



interface NotionResponse {
  results: Array<{
    id: string;
    properties: {
      [key: string]: {
        title?: Array<{ text: { content: string } }>;
        [key: string]: any;
      };
    };
  }>;
}

export async function getDatabase(): Promise<NotionResponse['results']> {
  const url = `/databases/${process.env.NOTION_DATABASE_ID}/query`;
  
  try {
    const response = await notionApi.post<NotionResponse>(url);
    console.log('API Response:', response.data); // Log response data
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data from Notion:', error.response || error);
    return [];
  }
}





