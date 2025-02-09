"use client";
import Head from "next/head";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { LoaderProvider } from "@/contexts/LoadingContex/LoadingContext";
import "aos/dist/aos.css";
import AOS from "aos";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Contact Us For Quality Legal Aid </title>
        <meta name="description" content="Get in touch with us for quality legal aid." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="icon" type="image/png" href="/lg.png" />
        <link rel="apple-touch-icon" href="/lg.png" /> */}
      </Head>
      <body>
        <GlobalStyle />
        <AppThemeProvider>
          <LoaderProvider>
            <Navbar />
            {children}
            <Footer />
          </LoaderProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}

