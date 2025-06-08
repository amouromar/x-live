import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X-Live",
  description: "The future of live streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-black text-white">
          <div className="hidden md:block">{children}</div>
          <div className="md:hidden flex items-center justify-center min-h-screen p-4 text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Screen Too Small</h1>
              <p>
                Please use a laptop or desktop computer with a screen width of
                at least 1220px for the best experience.
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
