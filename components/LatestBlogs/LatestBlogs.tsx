import { BlogSection } from "../BlogSection";
import { Column, Box, Text, CenterBox } from "../styled";

export const LatestBlogs = () => {
  return (
    <Column bg={"white"} py={["xxl", "xxxl"]} px={["m", "none"]} gap={"xxl"} >
      <Column alignItems={"flex-start"} gap={"m"} px={"m"} >
        <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
          Latest Blogs
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={"20%"}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} fontWeight={"bold"} color={"secondary"}>
          Explore Now
        </Text>
      </Column>
      <Text color={"secondary"} variant={"body"} width={["100%","800px"]} px={["none","xl"]}>
    Stay updated with our latest blogs, insights, and articles curated to keep you informed and inspired. Discover expert opinions, trending topics, and valuable tips across various domains.
  </Text>
      <CenterBox
      width={"100%"}
      bg={"grey"}
      >
        <BlogSection limit={3} /> 
      </CenterBox>
    </Column>
  );
};
