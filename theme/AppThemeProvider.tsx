import { ThemeProvider } from "styled-components";
import { ThemeMode, getTheme } from "./theme";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const activeTheme = getTheme();
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};
