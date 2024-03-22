import {
  BASE_BORDER_RADII,
  BASE_COLORS,
  BASE_FONT_WEIGHTS,
  BASE_FONTS,
} from "../elements";

export const BASE_TEXT_VARIANTS = {
  heading: {
    fontSize: 20,
    fontFamily: BASE_FONTS.heading,
  },
  body: {
    fontSize: 16,
    fontFamily: BASE_FONTS.body,
  },
};

export type AppTextVariants = keyof typeof BASE_TEXT_VARIANTS;
