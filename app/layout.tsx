import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Badge } from "react-bootstrap";
import MainMenu from "./components/MainMenu"
import ProductsList from "./components/ProductsList"
import { GoSearch } from "react-icons/go";
import { GoGitMergeQueue } from "react-icons/go";
import Link from "next/link"


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <header className="flex gap-1 | border-">

          <Link href="/main"><div className="logo" style={{textDecoration:"none"}}>Fake Store <GoGitMergeQueue /></div></Link>
          <div className="flex justify-between" style={{ width: "100%" }}>
            <div className="flex gap-0">
              <input placeholder="Search item"></input>
              <Button variant="warning" className="search-btn"><GoSearch className="go-search" size='1.4rem' /></Button>
            </div>
            <Button variant="primary" className="cart-btn">Cart <Badge bg="dark">1</Badge></Button>
          </div>

        </header>
        <nav>
          <MainMenu></MainMenu>
        </nav>
        <main >
         
          {children}

        </main>

      </body>
    </html>

  );
}
