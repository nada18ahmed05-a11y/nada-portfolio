import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nada Ahmed — Software QA & Testing Specialist | Robotics Student",
  description:
    "Interactive portfolio of Nada Ahmed — bridging robotics engineering and rigorous software testing to launch reliable, bug-free applications. Manual testing, test case design, QA consulting.",
  keywords: [
    "Nada Ahmed",
    "Software Testing",
    "QA",
    "Robotics",
    "Helwan National University",
    "DEPI",
    "ITI",
    "Manual Testing",
    "Bug Tracking",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Nada Ahmed" }],
  openGraph: {
    title: "Nada Ahmed — Software QA & Robotics",
    description:
      "Bridging robotics engineering and rigorous software testing to launch reliable, bug-free applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nada Ahmed — Software QA & Robotics",
    description:
      "Bridging robotics engineering and rigorous software testing to launch reliable, bug-free applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
