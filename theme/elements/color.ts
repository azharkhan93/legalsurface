export const BASE_COLORS = {
  primary: "#ffffff",
  primaryLight: "#7352c726",
  secondary: "#181716",
  grey: "#454545",
  greyish: "#ACB5BD",
  greyLight: "#E9ECEF",
  red : "#FF0000",
  white: "#ffffff",
  modalOverlayBg: "rgba(0,0,0,0.3)",
  whiteOverlay: "rgba(255, 255, 255, 0.7)",
  shadow: "rgba(115, 82, 199, 0.176) 0px 0.5rem 1.25rem",
  modalShadow:
    "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
    blackShadow: "rgba(0, 0, 0, 0.9) 10px 20px 30px, rgba(69, 69, 69, 1) 30px 50px 90px, rgba(255, 0, 0, 1) 5px 10px 15px",
};

export type AppColors = keyof typeof BASE_COLORS;
