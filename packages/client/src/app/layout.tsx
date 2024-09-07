import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigator from "@/components/organism/topNavigator/topNavigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokesample",
  description:
    "포켓몬스터 샘플 공유, 최신 뉴스 및 전략 정보 제공, 사용자 간의 상호 교류를 통해 다양한 팁과 정보를 나눌 수 있는 커뮤니티.",
  keywords:
    "포켓몬스터, 포켓몬 샘플, 포켓몬 뉴스, 포켓몬 커뮤니티, 포켓몬스터 교류, 포켓몬 전략, 사용자 커뮤니티",
  openGraph: {
    title: "Pokesample - 포켓몬스터 커뮤니티",
    description:
      "포켓몬스터 샘플 공유, 최신 뉴스 및 전략 정보 제공! 사용자 간의 상호 교류를 통해 다양한 팁과 정보를 나눌 수 있는 커뮤니티.",
    url: "https://yourdomain.com", // 실제 도메인으로 교체
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // 실제 이미지 URL로 교체
        width: 1200,
        height: 630,
        alt: "Pokesample 커뮤니티 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokesample - 포켓몬스터 커뮤니티",
    description:
      "포켓몬스터 샘플 공유, 최신 뉴스 및 사용자 간 교류를 위한 커뮤니티.",
    images: ["https://yourdomain.com/twitter-image.png"], // 실제 이미지 URL로 교체
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokesample-포켓몬스터 샘플 공유 커뮤니티</title>
        <meta
          name="description"
          content="포켓몬스터 샘플 공유, 최신 뉴스 및 전략 정보 제공! 사용자 간의 상호 교류를 통해 다양한 팁과 정보를 나눌 수 있는 커뮤니티."
        />
        <meta
          name="keywords"
          content="포켓몬스터, 포켓몬 샘플, 포켓몬 뉴스, 포켓몬 커뮤니티, 포켓몬스터 교류, 포켓몬 전략, 사용자 커뮤니티"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="포켓몬스터 커뮤니티 - 샘플 공유 & 뉴스"
        />
        <meta
          property="og:description"
          content="포켓몬스터 관련 샘플 공유, 최신 뉴스 및 사용자 상호 교류를 위한 커뮤니티입니다. 전략 정보 및 최신 소식을 나누세요!"
        />
        <meta
          property="og:image"
          content="https://example.com/path-to-image.png"
        />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="포켓몬스터 커뮤니티 - 샘플 공유 & 뉴스"
        />
        <meta
          name="twitter:description"
          content="포켓몬스터 관련 샘플 공유, 최신 뉴스 및 사용자 상호 교류를 위한 커뮤니티입니다. 전략 정보 및 최신 소식을 나누세요!"
        />
        <meta
          name="twitter:image"
          content="https://example.com/path-to-image.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <TopNavigator />
        {children}
      </body>
    </html>
  );
}
