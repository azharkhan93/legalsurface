"use client";

import { AppButtonVariants } from "@/theme";
import { StyledWithConfig } from "@/utils";
import styled from "styled-components";
import {
  typography,
  space,
  background,
  color,
  border,
  layout,
  variant,
  flex,
  flexbox,
  TypographyProps,
  SpaceProps,
  BackgroundProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexProps,
  FlexboxProps,
} from "styled-system";

type ButtonProps = TypographyProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  FlexboxProps &
  BorderProps & {
    variant?: AppButtonVariants;
  };

export const Button = styled.button.withConfig(StyledWithConfig)<ButtonProps>`
  ${typography}
  ${space}
  ${background}
  ${color}
  ${border}
  ${layout}
  ${flex}
  ${flexbox}
  cursor: pointer;
  ${variant({
    scale: "buttonVariants", // This should match the key in your themep
  })}/* transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(105%);
  } */
`;
