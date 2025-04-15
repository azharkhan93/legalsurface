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
        <meta property="og:url" content={`https://legalsurface.com/blog/${slug}`} /> 
         <link rel="canonical" href={`https://legalsurface.com/blog/${slug}`} />
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

                    {/* <Text variant="body" color="white">
                      {`Created by: ${post.createdBy || "Unknown"}`}
                    </Text> */}
                    {/* <Row width={"90%"} justifyContent={"space-between"}>
                      <Text variant="body" color="white">
                        {`Created on: ${new Date(
                          post.createdDate || ""
                        ).toLocaleDateString()}`}
                      </Text>
                      <Text variant="body" color="white">
                        {post.status || "No status available"}
                      </Text>
                    </Row> */}
                  </Column>
                </Box>
              ) : (
                <Text color="white">Post not found</Text>
              )}
              <Box
                width={["373px", "100%"]}
                bg={"secondary"}
                color="white"
                flexDirection={"row"}
                textAlign={["start", "center"]}
                px={"s"}
              >
                <Text
                  variant="body"
                  dangerouslySetInnerHTML={{ __html: post?.description || "" }}
                />
              </Box>
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

// SEO Keywords
// To optimize your blog for SEO, consider using the following keywords throughout your post:

// Legal services
// Law firm
// Legal advice
// Legal consultation
// Criminal defense
// Family law
// Corporate law
// Legal representation
// Expert legal guidance
// Navigating legal challenges
// Tips for Better SEO
// Use Keywords Naturally: Incorporate the keywords in headings, subheadings, and throughout the text without keyword stuffing.
// Meta Description: Craft a compelling meta description that includes primary keywords to enhance click-through rates.
// Internal and External Links: Link to related content within your blog and reputable external sources to improve credibility.
// Image Alt Text: Use descriptive alt text for images, including relevant keywords where appropriate.
// Engaging Headings: Use clear and engaging headings and subheadings that include keywords to improve readability and SEO.


// Section 1: What Are Legal Services?
// Legal services encompass a wide range of professional services provided by law firms and legal professionals. These services include:

// Consultation and Advice: Engaging with a lawyer to understand your legal rights and options.
// Representation: Having a lawyer represent you in legal proceedings.
// Document Preparation: Assistance in drafting contracts, wills, and other legal documents.
// Keywords to include: legal services, law firms, legal consultation

// Section 2: Types of Legal Services
// There are several types of legal services offered by law firms:

// Criminal Defense: Protecting the rights of individuals accused of crimes.
// Family Law: Handling matters such as divorce, custody, and adoption.
// Corporate Law: Assisting businesses with compliance and contractual obligations.
// Keywords to include: criminal defense, family law, corporate law

// Section 3: Why You Need Legal Services
// Engaging professional legal services can help you avoid pitfalls and ensure that your rights are protected. Some benefits include:

// Expert Guidance: Navigating complex legal landscapes can be daunting without the help of a professional.
// Peace of Mind: Knowing that an experienced lawyer is handling your case reduces stress.
// Keywords to include: expert legal guidance, legal representation

// Conclusion
// Understanding legal services is essential for anyone facing legal issues. By engaging with a reputable law firm, you can ensure that you have the support needed to navigate these challenges successfully.

// Keywords to include: legal services, law firm, legal advice