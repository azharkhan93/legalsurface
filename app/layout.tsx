"use client";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <AppThemeProvider>
          <Box width={"100vw"} height={"100vh"}>
            {children}
          </Box>
        </AppThemeProvider>
      </body>
    </html>
  );
}
