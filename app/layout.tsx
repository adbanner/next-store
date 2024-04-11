import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactClientProvider from "./components/ReactClientProvider";
import Header from "./components/Header";
import  PathName  from "./components/PathName";

import StoreProvider from "../lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Fake Store",
  description: "Fake store products ",
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
          <PathName></PathName>
          <main >
            {children}
          </main>
        </body>
      </html>
      </StoreProvider>
    </ReactClientProvider>
  );
}
