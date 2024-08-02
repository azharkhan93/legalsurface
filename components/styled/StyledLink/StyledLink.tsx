"use client";
import styled from "styled-components";
import { typography, TypographyProps, color, ColorProps } from "styled-system";

type HyperLinkProps = TypographyProps & ColorProps & { $UnderlineColor?: string };

export const StyledLink = styled.a<HyperLinkProps>`
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  font-family: "panton";
  font-size: 1rem; 
  font-weight: 500;
  color: #D4BDE8; 
  border-top: 1px solid #D4BDE8;
  border-bottom: 1px solid #D4BDE8;
  padding: 5px;

  
  ${typography}
  ${color}
  position: relative;
  transition: all 0.3s ease-in;


  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${(props) =>
      props.$UnderlineColor === ""
        ? ""
        : props.$UnderlineColor === "#D4BDE8"
        ? ""
        : "#D4BDE8"};
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    transform: translateX(3px) scale(1); 
  }
`;




