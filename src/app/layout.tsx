import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className="dark scroll-smooth">
      <body
        className={`${roboto.className} antialiased bg-gray-900 text-gray-400`}
      >
        {children}
      </body>
    </html>
  );
}
