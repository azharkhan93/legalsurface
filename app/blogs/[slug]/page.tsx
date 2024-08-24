"use client";
import { useEffect, useState } from "react";
import Head from "next/head"; 
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

  const metaDescription = post?.description.slice(0, 160) || "Blog post about legal services and advice.";
  const metaKeywords = `law firm, legal services, ${post?.title}, ${post?.createdBy}, legal advice`;

  return (
    <>
      <Head>
        <title>{post?.title || "Blog Post"} | LegalSurface</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={post?.title || "Blog Post"} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post?.file || "/default-image.png"} />
        {/* <meta property="og:url" content={`https://legalsurface.com/blog/${slug}`} /> */}
        {/* <link rel="canonical" href={`https://legalsurface.com/blog/${slug}`} /> */}
      </Head>

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

// or a law firm blog post titled "Understanding Legal Contracts for Small Businesses," you might optimize as follows:

// Title: "Understanding Legal Contracts for Small Businesses | LegalSurface"
// Slug: legal-contracts-small-businesses
// Here, both the title and the slug include relevant keywords ("legal contracts" and "small businesses"), which will help in ranking for those search terms.

