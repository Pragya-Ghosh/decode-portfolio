import type { Metadata } from "next";
import { Geist, Geist_Mono, Monoton, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-monoton" 
});

const jetBrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Decode | Portfolio",
  description: "Pragya Ghosh's personal portfolio and technical blog",
  icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${jetBrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-main transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}