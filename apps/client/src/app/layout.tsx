import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@cialdnb/ui/globals.css";
import QueryProviders from "~/lib/query-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cialdnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
