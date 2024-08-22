"use client";
import { Box, GlobalStyle } from "@/components";
import "./globals.css";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apolloClient";
import { Navbar } from "@/components/Navbar/Navbar";
// import { Footer } from "@/components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { LoaderProvider } from "@/contexts/LoadingContex/LoadingContext";
import 'aos/dist/aos.css';  
import AOS from 'aos';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, 
  //     easing: 'ease-in-out', 
  //     once: true, 
  //   });
  // }, []);

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

