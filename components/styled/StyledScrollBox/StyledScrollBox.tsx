"use client"
import styled from "styled-components";
import { Box } from "../Box";

export const StyledScrollBox = styled(Box)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px; 
  }

  &::-webkit-scrollbar-track {
    background: #eff3fc; 
  }

  &::-webkit-scrollbar-thumb {
    background: #3c65f5; 
    border-radius: 3px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;