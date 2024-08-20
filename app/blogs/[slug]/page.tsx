"use client"
import { useEffect, useState } from "react";
import { Box, Column, Text, TopBar } from "@/components";
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
         const response = await axios.get(`/api/blogpost?slug=${slug}`);
        //  console.log("Fetched posts:", response.data);
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

    <>
    <TopBar backgroundImage={"/images/hero.jpg"} aboutText={"Blogs Page"} whoWeAreText={"Explore Now"} />
    <Box
    bg={"secondary"}
      width={"100%"}
      // mt={"xl"}
      alignItems="center"
      // justifyContent="space-between"
      // px="s"
      // py="xxl"
      gap={"header"}
    >
      <Box
      
        py={["xl", "header"]}
        gap={"header"}
        alignItems={"center"}
      >
        <Box
          alignItems={"center"}
          // width={"45%"}
          gap={"l"}
          flexDirection={"row"}
        >
          <Image
            src={post.file || "/default-image.png"}
            alt={post.title || "Post Image"}
            width={450}
            height={250}
            style={{ borderRadius: "8px" }} />
          <Column
            alignItems={"center"}
            border={"2px solid red"}
            width={"400px"}
            px={"xl"}
          >
            <Text variant="subHeading" color="white">
              {post.title}
            </Text>
            <Text variant="body" color="white">
              {post.status || "No status available"}
            </Text>
          </Column>
        </Box>
        <Box
        bg={"secondary"}
          width={"850px"}
          color="white"
          gap={"xl"}
        >
          <Text variant="body" dangerouslySetInnerHTML={{ __html: post.description }} />
        </Box>
      </Box>
    </Box></>
  );
}


