
import { Column, Text } from "@/components";
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
      border="2px solid #e0e0e0"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
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
        <div
          style={{
            width: "100%",
            height: "270px",
            backgroundColor: "#f0f0f0",
          }}
        />
      )}
      <Column alignItems="flex-start" gap="l" px="m" py="xxxl">
        <Text variant="subHeading">{post.title || "Untitled Post"}</Text>
        <Text variant="body" color="secondary">
          {post.description || "No description available."}
        </Text>
      </Column>
    </Column>
  );
};


