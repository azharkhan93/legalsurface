"use client";
import { Box, Column, Text } from "@/components";
import Image from "next/image";
import React from "react";
import { Post } from "../../BlogSection";
import { LoadingCard } from "../LoadingCard";

type PostCardProps = {
  post: Post;
  loading?: boolean;
};

export const PostCards: React.FC<PostCardProps> = ({ post, loading }) => {
  if (loading) {
    return <LoadingCard />;
  }

  return (
    <Column
    width={{ xs: "100%", sm: "48%", md: "30%" }}
      border="2px solid red"
      borderRadius="xl"
      overflow="hidden"
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
        <Text variant="subHeading" fontWeight="bold">
          {post.title || "Untitled Post"}
        </Text>
        <Text variant="body" color="secondary">
          {post.description || "No description available."}
        </Text>
        <Text variant="body" color="secondary">
          {post.createdDate
            ? `Created on: ${new Date(post.createdDate).toLocaleDateString()}`
            : "Date not available"}
        </Text>
        <Box
        width={"90%"}
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
      </Column>
    </Column>
  );
};
