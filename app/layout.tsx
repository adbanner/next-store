import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactClientProvider from "./components/ReactClientProvider";
import Header from "./components/header/Header";
import Footer from "./components/Footer"

import StoreProvider from "../lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "Next Store",
    template: "Next Store | %s"
  }
  ,
  description: "Next store products ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <ReactClientProvider>
      <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <main >
            {children}
          </main>
          <Footer/>
        </body>
      </html>
      </StoreProvider>
    </ReactClientProvider>
  );
}
