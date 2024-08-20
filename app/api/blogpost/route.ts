import { getBlogPosts } from '@/utils/notion';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    const posts = await getBlogPosts();

    if (slug) {
      const post = posts.find((p) => p.slug === slug);
      if (post) {
        return NextResponse.json(post);
      } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}


