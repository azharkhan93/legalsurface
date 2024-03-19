"use client";
import {
  BASE_COLORS,
  BASE_SPACING,
  ThemedColorProps,
  ThemedSpaceProps,
} from "@/theme";
import { StyledWithConfig } from "@/utils/styled";
import styled from "styled-components";
import {
  background,
  layout,
  space,
  border,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  color,
} from "styled-system";

type InputBoxProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  ThemedSpaceProps &
  ThemedColorProps;

export const StyledInputBox = styled.input.withConfig(
  StyledWithConfig
)<InputBoxProps>`
  width: 100%;
  outline: none;
  font-family: DMSansRegular;
  font-size: 15px;
  padding-left: ${BASE_SPACING.l}px;

  /* &::-webkit-file-upload-button {
    background-color: #3c65f5;
    color: white;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    padding-left: 40px;
    padding-right: 40px;
  } */
  ${border}
  ${background}
  ${layout}
  ${space}
  ${color}
  &::placeholder {
    color: ${BASE_COLORS.greyish};
    font-family: galano;
    font-size: 15px;
  }
`;
