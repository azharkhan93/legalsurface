"use client";

import styled from "styled-components";
import { typography, TypographyProps, color, ColorProps } from "styled-system";

type HyperLinkProps = TypographyProps & ColorProps & { $UnderlineColor?: string };

export const StyledLink = styled.a<HyperLinkProps>`
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  font-family: "panton";
  font-size: 0.9rem; 
  font-weight: 400;
  color: white; 
  
  ${typography}
  ${color}
  position: relative;
  transition: all 0.3s ease-in;

  /* Move transition here for smooth animation */

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) =>
      props.$UnderlineColor === "blue"
        ? "yellow"
        : props.$UnderlineColor === "green"
        ? "yellow"
        : "green"};
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    transform: translateX(3px) scale(1); /* Bulge out and move on hover */
  }
`;




