import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { contentfulClient } from "./utils/helpers/contentfulClient";
import { TypeLandingPageSkeleton } from "./utils/types/ContentfulTypes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helena Sjögren Keramiker",
  description: "Denna sajt är Helena Sjögrens hemsida",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const landingPages = await contentfulClient.getEntries<TypeLandingPageSkeleton>({
    content_type: "landingPage",
  });

  const pageData = JSON.parse(JSON.stringify(landingPages))
  return (
    <html lang="sv">
      <body className={inter.className}>
        <NavigationBar landingPages={pageData}/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
