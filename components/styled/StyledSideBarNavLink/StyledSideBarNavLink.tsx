"use client";
import styled from "styled-components";
import { Row } from "../Row";
import { BASE_COLORS } from "@/theme";
export const StyledSideBarNavLink = styled(Row)`
  &:hover {
    background-color: ${BASE_COLORS.greyLight};
  }
  cursor: pointer;
`;
