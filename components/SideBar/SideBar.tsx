import { CenterBox, Box, Column, Text } from "../styled";
import { SideBarSection } from "./components";
import { SideBarData } from "@/constants";

export const SideBar = () => {
  return (
    <Column width={"100%"} gap={"xxxxl"}>
      <CenterBox height={"100px"} border={"1px solid red"}>
        <Text>Logo</Text>
      </CenterBox>
      <Column width={"100%"} border={"1px solid blue"} gap={"xxxxl"}>
        {SideBarData.map((data, index) => (
          <SideBarSection heading={data.heading} navLinkData={data.navLink} />
        ))}
      </Column>
    </Column>
  );
};
