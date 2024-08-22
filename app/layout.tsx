"use client";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar/Navbar";
// import { Footer } from "@/components/Footer/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoaderProvider } from "@/contexts/LoadingContex/LoadingContext";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  // useEffect(() => {
  //   if (localStorage.getItem("token") === null) {
  //     router.push("/");
  //   }
  // }, [router]);

  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        
          <AppThemeProvider>
            <ApolloProvider client={client}>
            <LoaderProvider>
           
                <ToastContainer />
                <Navbar />
                {children}
                {/* <Footer /> */}
                
            </LoaderProvider>
            </ApolloProvider>
          </AppThemeProvider>
        
      </body>
    </html>
  );
}

