"use client";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  style,
  compose,
  shadow,
  ShadowProps,
  backgroundColor,
  BackgroundColorProps,
} from "styled-system";
import { StyledWithConfig } from "@/utils/styled";
import {
  BASE_COLORS,
  ThemedBorderRadiusProps,
  ThemedColorProps,
  ThemedPositionProps,
  ThemedSpaceProps,
} from "@/theme";
import { AppSpaceProps } from "@/theme/elements/spacing";

const gap = style({
  prop: "gap",
  key: "space",
  scale: "space",
});

const systemStyles = compose(
  space,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  borderRadius,
  gap,
  shadow
);

export type BoxProps = ThemedSpaceProps &
  ThemedBorderRadiusProps &
  LayoutProps &
  TypographyProps &
  ThemedColorProps &
  BackgroundProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundColorProps &
  ShadowProps & {
    gap?: string | number | string[] | number[];
  };

export const Box = styled.div.withConfig(StyledWithConfig)<BoxProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${systemStyles}
`;

export const CenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${flexbox}
`;

export const HoverBox = styled(CenterBox)<BoxProps>`
  &:hover {
    background-color: ${BASE_COLORS.greyLight};
  }
  cursor: pointer;
`;

export const GreyHoverBox = styled(CenterBox)<BoxProps>`
  &:hover {
    background-color: ${BASE_COLORS.grey};
  }
  cursor: pointer;
`;
