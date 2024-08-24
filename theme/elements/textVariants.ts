import {
  BASE_BORDER_RADII,
  BASE_COLORS,
  BASE_FONT_WEIGHTS,
  BASE_FONTS,
} from "../elements";

export const BASE_TEXT_VARIANTS = {
  heading: {
    fontSize: 35,
    fontFamily: BASE_FONTS.heading,
  },
  subHeading: {
    fontSize: 30,
    fontFamily: BASE_FONTS.subHeading,
  },
  body: {
    fontSize: 18,
    fontFamily: BASE_FONTS.body,
  },
};

export type AppTextVariants = keyof typeof BASE_TEXT_VARIANTS;
