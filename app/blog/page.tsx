import React from 'react';
import axios from 'axios';

interface NotionPage {
  id: string;
  properties: {
    [key: string]: {
      title?: Array<{ text: { content: string } }>;
      [key: string]: any;
    };
  };
}

export default async function Page() {
  try {
    // Use axios to fetch data from the API route
    const { data } = await axios.get<NotionPage[]>('/api/notion');

    return (
      <div>
        <h1>Notion Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.properties.Name?.title[0]?.text.content || 'No title'}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error fetching data</h1>
        <p>Sorry, there was an issue fetching the data.</p>
      </div>
    );
  }
}











