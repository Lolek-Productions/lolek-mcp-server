import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Fr. Josh McCarty",
  description: "Nerdiest priest on the planet",
  openGraph: {
    title: 'Fr. Josh McCarty',
    description: 'Nerdiest priest on the planet',
    images: ['https://frjosh.com/images/FrJoshCollarPortrait2.jpg'],
    url: 'https://frjosh.com',
  },
  twitter: {
    title: 'Fr. Josh McCarty',
    card: 'summary_large_image',
    description: 'Nerdiest priest on the planet',
    images: ['https://frjosh.com/images/FrJoshCollarPortrait2.jpg'],
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="antialiased">
        {process.env.NODE_ENV === "production" && <Analytics />}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
