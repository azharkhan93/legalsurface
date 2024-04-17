"use client";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      router.push("/");
    }
  }, [router]);

  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <AppThemeProvider>
          <ApolloProvider client={client}>
            <Box width={"100vw"} height={"100vh"}>
              {children}
            </Box>
          </ApolloProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
