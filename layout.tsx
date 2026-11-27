import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
export const metadata: Metadata = {
  title: { default: "Solan Bamboo Furniture | Traditional Bamboo Furniture", template: "%s | Solan Bamboo Furniture" },
  description: "Traditional handcrafted bamboo furniture from Dharja, Solan, Himachal Pradesh. Explore chairs, tables, sofas, beds, swings and more.",
  metadataBase: new URL("https://solanbamboo.in")
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><WhatsAppFloat /></body></html>;
}
