import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: "Abul Kalam Robin - Portfolio",
  description: "Full Stack & Mobile App Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${firaCode.variable} font-sans antialiased bg-gradient-to-b from-[#09090b] via-[#18181b] to-[#2e1065] text-white min-h-screen`}
      >
        <AnimatedBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
