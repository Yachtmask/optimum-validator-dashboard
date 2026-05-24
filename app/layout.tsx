import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimum Validator Ops",
  description: "mump2p performance, bandwidth tracking & Optimum stories hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

