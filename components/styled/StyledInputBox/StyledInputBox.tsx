"use client"
import { ThemedColorProps, ThemedSpaceProps } from "@/theme";
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
  font-family: galano;
  font-size: 15px;

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
    padding-left: 25px;
    color: #d5d2d2;
    font-family: galano;
    font-size: 15px;
  }
`;