"use cient"
import { AppTextVariants, AppThemeFonts, AppThemeWeights, BASE_TEXT_VARIANTS, ThemedBorderRadiusProps, ThemedColorProps, ThemedSpaceProps } from "@/theme";
import { StyledWithConfig } from "@/utils";
import styled from "styled-components";
import { BackgroundProps, BorderProps, HeightProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps, WidthProps, background, border, color, height, position, shadow, space, system, typography, variant, width } from "styled-system";

const customTypography = system({
  font: {
    property: "fontFamily",
    scale: "fonts",
  },
  weight: {
    property: "fontWeight",
    scale: "fontWeights",
  },
  size: {
    property: "fontSize",
    scale: "fontSizes",
  },
});

type ResponsiveValue<T> = T | Array<T | null> | { [breakpoint: string]: T };

type TextProps = WidthProps &
  HeightProps &
  SpaceProps &
  ThemedColorProps &
  ThemedSpaceProps &
  ThemedBorderRadiusProps &
  TypographyProps &
  LayoutProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  ShadowProps & {
    font?: AppThemeFonts;
    weight?: AppThemeWeights;
    size?: ResponsiveValue<number | string>;
    variant?: ResponsiveValue<AppTextVariants>; 
  };

  export const Text = styled.span.withConfig(StyledWithConfig)<TextProps>`
  ${width}
  ${height}
  ${space}
  ${color}
  ${typography}
  ${border}
  ${background}
  ${position}
  ${shadow}
  ${customTypography}
  ${variant({
    scale: "textVariants",
    variants: {
      heading: {
        ...BASE_TEXT_VARIANTS.heading,
        lineHeight: BASE_TEXT_VARIANTS.heading.lineHeight,
      },
      subHeading: {
        ...BASE_TEXT_VARIANTS.subHeading,
        lineHeight: BASE_TEXT_VARIANTS.subHeading.lineHeight,
      },
      body: {
        ...BASE_TEXT_VARIANTS.body,
        lineHeight: BASE_TEXT_VARIANTS.body.lineHeight,
      },
    },
  })}
`;

