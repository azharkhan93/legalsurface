import {
  BASE_COLORS,
  BASE_BORDER_RADII,
  BASE_FONTS,
  BASE_SPACING,
} from "../elements";

export const BASE_BUTTON_VARIANTS = {
  primary: {
    backgroundColor: BASE_COLORS.secondary,
    color: "white",
    border: "none",
    borderRadius: BASE_BORDER_RADII.xs,
     padding: "5px",
    fontSize: BASE_SPACING.l,
    font: BASE_FONTS.body,
    fontWeights: "500",
  },
  outline: {
    backgroundColor: BASE_COLORS.primary,
    borderColor: BASE_COLORS.secondary,
    color: BASE_COLORS.secondary,
    borderRadius: BASE_BORDER_RADII.circle,
    padding: "3px",
  },
  disabled: {
    backgroundColor: "grey",
    border: "none",
    color: "black",
    borderRadius: BASE_BORDER_RADII.xs,
    padding: "5px",
    fontSize: BASE_SPACING.l,
    font: BASE_FONTS.body,
    fontWeight: "500",
  },
};
export type AppButtonVariants = keyof typeof BASE_BUTTON_VARIANTS;
