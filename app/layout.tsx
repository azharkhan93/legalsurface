"use client";
import { Box, Row } from "@/components/styled";
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
        <AppThemeProvider>
          <Row width={"100vw"} height={"100vh"} border={"1px solid blue"}>
            <Box width={"20%"} height={"100%"} border={"1px solid green"}></Box>
            <Box width={"80%"} height={"100%"} border={"1px solid green"}>
              {children}
            </Box>
          </Row>
        </AppThemeProvider>
      </body>
    </html>
  );
}
