"use client";
import { Box, Column, Row, SideBar, StyledSideBar, TopBar } from "@/components";
import { StyledTopBar } from "@/components/styled/StyledTopBar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarWidth, setSideBarWidth] = useState("20%");
  const [isOpen, setIsOpen] = useState(true);
  const handleSideBarToggle = () => {
    setSideBarWidth(sideBarWidth === "20%" ? "0%" : "20%");
    setIsOpen(!isOpen);
  };
  return (
    <Row width={"100vw"} height={"100vh"} gap={"m"}>
      <StyledSideBar width={sideBarWidth} height={"100%"}>
        <SideBar handleCollapse={handleSideBarToggle} isOpen={isOpen} />
      </StyledSideBar>
      <Column width={"100%"}>
        <StyledTopBar>
          <TopBar handleCollapse={handleSideBarToggle} isOpen={isOpen} />
        </StyledTopBar>
        <Box width={"100%"} height={"100%"}>
          {children}
        </Box>
      </Column>
    </Row>
  );
}
