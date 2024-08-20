"use client";
import { Box, Button, CenterBox, Column, Text } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Post } from "../../BlogSection";
import { LoadingCard } from "../LoadingCard";

type PostCardProps = {
  post: Post;
  loading?: boolean;
};

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

export const PostCards: React.FC<PostCardProps> = ({ post, loading }) => {
  const router = useRouter();
  const [showFullText, setShowFullText] = useState(false);

  const handleViewMore = () => {
    if (post.slug) {
      router.push(`/blogs/${post.slug}`);
    } else {
      setShowFullText(true);
    }
  };

  if (loading) {
    return <LoadingCard />;
  }

  return (
    <Column
      width={{ xs: "100%", sm: "48%", md: "30%" }}
      border="2px solid white"
      borderRadius="xl"
      overflow={"hidden"}
      bg={"white"}
    >
      {post.file ? (
        <Image
          src={post.file}
          alt={post.title || "Post Image"}
          width={500}
          height={270}
          style={{ width: "100%", height: "auto", borderRadius: "0 0 0 0" }}
        />
      ) : (
        <Box
          style={{
            width: "100%",
            height: "270px",
            backgroundColor: "#f0f0f0",
          }}
        />
      )}
      <Column alignItems="flex-start" gap="l" px="m" py="xxxl">
        <Text variant="subHeading" >
          {post.title || "Untitled Post"}
        </Text>
        <Text variant="body" color="secondary">
          {showFullText
            ? post.description || "No description available."
            : truncateText(post.description1 || "No description available.", 30)}
        </Text>
       
        <Button
        variant="primary"
          py={"s"}
          px={"xl"}
          // width={"50px"}
          style={{ background: "black" }}
          onClick={handleViewMore}
        >
          {showFullText ? "View Full Post" : "Read Blog"}
        </Button>
        
        <Box
          width={["100%","90%"]}
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text variant="body" color="secondary">
            {post.createdBy
              ? `Created by: ${post.createdBy}`
              : "Author not available"}
          </Text>
          <Text variant="body" color="secondary">
            {post.status ? `Status: ${post.status}` : "Status not available"}
          </Text>
          
        </Box>
        <Text variant="body" color="secondary">
          {post.createdDate
            ? `Created on: ${new Date(post.createdDate).toLocaleDateString()}`
            : "Date not available"}
        </Text>
      </Column>
    </Column>
  );
};


