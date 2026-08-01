import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "TCM Research Website",
  description: "Herbal Whisper - 中医养生顾问",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <Script
          src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        
        <Script id="coze-chat-init" strategy="afterInteractive">
          {`
            new CozeWebSDK.WebChatClient({
              config: {
                bot_id: '7668930042013417523',
              },
              componentProps: {
                title: 'Herbal Whisper',
              },
              auth: {
                type: 'token',
                token: 'pat_7YmesA8VESpr6eeAe2cUqNLQhUaQly3QI5jSCkwZnnojF6L0CrcjQzONhnEKhBKj',
                onRefreshToken: function () {
                  return 'pat_7YmesA8VESpr6eeAe2cUqNLQhUaQly3QI5jSCkwZnnojF6L0CrcjQzONhnEKhBKj';
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}