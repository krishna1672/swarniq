import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Svarniq Jewels — Where Elegance Meets Everyday",
  description:
    "Premium Indian and Western jewellery. 18K real gold PVD plated, hypoallergenic, and tarnish-resistant. Free shipping on orders above ₹699.",
  openGraph: {
    title: "Svarniq Jewels",
    description: "Where Elegance Meets Everyday.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
