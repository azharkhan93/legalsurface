import { CenterBox, Box, Column, Text } from "../styled";
import { SideBarNavLink } from "./components";

export const SideBar = () => {
  return (
    <Column width={"100%"}>
      <CenterBox height={"100px"} border={"1px solid red"}>
        <Text>Logo</Text>
      </CenterBox>
      <Column width={"100%"} border={"1px solid blue"}>
        <SideBarNavLink icon={""} label={"label"} />
      </Column>
    </Column>
  );
};
