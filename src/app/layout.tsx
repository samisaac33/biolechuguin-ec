import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollManager } from "@/components/ScrollManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioLechuguín EC | Lechuguín → envases biodegradables",
  description:
    "Pitch público-privado: valorización de lechuguín de embalses y represas en Ecuador, impacto ESG y modelo industrial de referencia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-clip font-sans">
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
