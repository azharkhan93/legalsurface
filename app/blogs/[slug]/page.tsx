"use client"
import { useEffect, useState } from "react";
import { Box, Text } from "@/components";
import Image from "next/image";
import axios from "axios";

type PageProps = {
  params: {
    slug: string;
  };
};

type Post = {
  slug: string;
  file?: string;
  title: string;
  // description: RichTextItem[];
   description: string; 
  createdDate?: string;
  createdBy?: string;
  status?: string;
};

export default function Page({ params }: PageProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = params;

  useEffect(() => {
    async function fetchPost() {
      try {
      //   const response = await axios.get("/api/blogpost");
      
      // setPost(response.data);
         const response = await axios.get(`/api/blogpost?slug=${slug}`);
         console.log("Fetched posts:", response.data);
         setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <Box
      width={"100%"}
      mt={"xlg"}
      alignItems="center"
      justifyContent="space-between"
      px="s"
      py="xxl"
    >
      <Box
        py={["xl", "xxxl"]}
        gap={"xl"}
        alignItems={"center"}
        flexDirection={["column", "row"]}
      >
        <Box
          alignItems={"center"}
          width={"45%"}
          gap={"l"}
        >
          <Image
            src={post.file || "/default-image.png"}
            alt={post.title || "Post Image"}
            width={400}
            height={200}
            style={{ borderRadius: "8px" }}
          />
          <Text variant="heading" color="primary">
            {post.title}
          </Text>
          <Text variant="subHeading" color="white">
            {post.status || "No status available"}
          </Text>
        </Box>
        <Text variant="body" dangerouslySetInnerHTML={{ __html: post.description }} />
      </Box>
    </Box>
  );
}


