
import '@/app/ui/global.css';
import { montserrat, figtree } from '@/app/ui/fonts';
import { GoogleAnalytics } from '@next/third-parties/google'
 
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
