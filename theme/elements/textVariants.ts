import { BASE_FONTS } from "./fonts";

export const BASE_TEXT_VARIANTS = {
  heading: {
    fontSize: 35,
    fontFamily: BASE_FONTS.heading,
    lineHeight: 1.4,
  },
  subHeading: {
    fontSize: 30,
    fontFamily: BASE_FONTS.subHeading,
    lineHeight: 1.4,
  },
  body: {
    fontSize: 18,
    fontFamily: BASE_FONTS.body,
    lineHeight: 1.5,
  },
};

export type AppTextVariants = keyof typeof BASE_TEXT_VARIANTS;
