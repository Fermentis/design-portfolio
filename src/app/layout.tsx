
import '@/app/ui/global.css';
import { openSans } from '@/app/ui/fonts';
import { outfit } from '@/app/ui/fonts';
import { GoogleAnalytics } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${outfit.className} antialiased`}>{children}</body>
       <GoogleAnalytics gaId="G-18HVNWQSGK" />
    </html>
  );
}
