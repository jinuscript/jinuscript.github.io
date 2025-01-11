import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jinuscript",
  description:
    "웹 개발, Next.js, 그리고 최신 기술 트렌드를 다루는 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
