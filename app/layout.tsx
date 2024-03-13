"use client";
import { Box, Row, SideBar } from "@/components";
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
          <Row width={"100vw"} height={"100vh"} p={"s"}>
            <Box width={"20%"} height={"100%"} border={"1px solid green"}>
              <SideBar />
            </Box>
            <Box width={"80%"} height={"100%"} border={"1px solid green"}>
              {children}
            </Box>
          </Row>
        </AppThemeProvider>
      </body>
    </html>
  );
}
