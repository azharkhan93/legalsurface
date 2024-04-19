"use client"
import styled from "styled-components";
import { Box } from "../Box";

export const StyledScrollBox = styled(Box)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #eff3fc; /* Color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: #3c65f5; /* Color of the scrollbar thumb */
    border-radius: 3px; /* Rounded corners of the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }
`;