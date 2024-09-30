
import '@/app/ui/global.css';
import { montserrat, figtree } from '@/app/ui/fonts';
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeff Border's Portfolio",
  description: "Jeff's portfolio of UX Design projects",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${montserrat.className} ${figtree.className} antialiased`}>{children}</body>
       <GoogleAnalytics gaId="G-18HVNWQSGK" />
    </html>
  );
}
