"use client";
import { useEffect, useState } from "react";
import { Box, CenterBox, Column, Row, Text, TopBar } from "@/components";
import Image from "next/image";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

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
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return (
    <>
      <TopBar
        backgroundImage={"/images/hero.jpg"}
        aboutText={"Blogs Page"}
        whoWeAreText={"Explore Now"}
      />
      <Box bg={"secondary"} width={"100%"} alignItems="center" gap={"header"}>
        <Box py={["xl", "header"]} gap={"header"} alignItems={"center"}>
          {loading ? (
            <CenterBox height="300px">
              <FaSpinner size={50} color="white" className="spinner" />
            </CenterBox>
          ) : (
            <>
              {post ? (
                <Box
                  flexDirection={["column-reverse", "row"]}
                  alignItems={"center"}
                  gap={"l"}
                >
                  <Image
                    src={post.file || "/default-image.png"}
                    alt={post.title || "Post Image"}
                    width={450}
                    height={250}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                  <Column
                    alignItems={"flex-start"}
                    width={"400px"}
                    px={"xl"}
                    gap={"s"}
                    border={"3px solid red"}
                  >
                    <Text variant="subHeading" color="white">
                      {post.title}
                    </Text>

                    <Text variant="body" color="white">
                      {`Created by: ${post.createdBy || "Unknown"}`}
                    </Text>
                    <Row width={"90%"} justifyContent={"space-between"}>
                      <Text variant="body" color="white">
                        {`Created on: ${new Date(
                          post.createdDate || ""
                        ).toLocaleDateString()}`}
                      </Text>
                      <Text variant="body" color="white">
                        {post.status || "No status available"}
                      </Text>
                    </Row>
                  </Column>
                </Box>
              ) : (
                <Text color="white">Post not found</Text>
              )}
              <CenterBox
                width={["373px", "780px"]}
                bg={"secondary"}
                color="white"
                flexDirection={"column"}
                textAlign={["start", "center"]}
                px={"s"}
              >
                <Text
                  variant="body"
                  dangerouslySetInnerHTML={{ __html: post?.description || "" }}
                />
              </CenterBox>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
