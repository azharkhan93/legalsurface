// app/api/notion/route.ts
import { NextResponse } from 'next/server';
import { getDatabase } from '@/utils/notion';

export async function GET() {
  try {
    const data = await getDatabase();
    
    // Log the fetched data
    console.log('Fetched data from Notion:', data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from Notion:', error);
    return NextResponse.error();
  }
}

