
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Box, Column, Text } from "../styled";

type Post = {
  placeholder: string | undefined;
  id: string;
  title: string;
  file?: string;
  description: string;
};

export const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("/api/blogpost");
        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (posts.length === 0) return <p>No posts available</p>;

  return (
    <Box
      display="flex"
      flexWrap="wrap"
    //   justifyContent="space-between"
      flexDirection={"row"}
      gap="xxxl"
      width="100%"
      px="xxxl"
      py="header"
    >
      {posts.map((post) => (
        <Column
          key={post.id}
          width={{ xs: "100%", sm: "48%", md: "30%" }}
        //   py={"xxxl"}
          
          border={"2px solid #e0e0e0"}
          borderRadius="xl"
          overflow="hidden"
          bg="white"
        >
          {post.file && (
            <Image
              src={post.file}
              alt={post.title}
              width={500}
              height={270}
              style={{ width: "100%", height: "auto", borderRadius: "0px 0px 0 0" }}
            />
          )}
          <Column alignItems="flex-start"  gap="l" px={"m"} py={"xxxl"} >
            <Text variant="subHeading">{post.title}</Text>
            <Text variant="body" color="secondary">
              {post.description}
            </Text>
          </Column>
        </Column>
      ))}
    </Box>
  );
};
