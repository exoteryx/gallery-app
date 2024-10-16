import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const revalidate = 3600;


export const metadata: Metadata = {
  title: "NextJS Gallery",
  description: "A simple Gallery App made with NextJS",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-w-6xl mx-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
