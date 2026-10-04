import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniFightRL Progress",
  description: "A calm learning roadmap from PyTorch to robot reinforcement learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
