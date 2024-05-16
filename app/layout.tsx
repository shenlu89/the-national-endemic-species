import "./globals.css";
import { ReactNode } from "react";
import localFont from "@/lib/local-font";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Script from "next/script";
import { homePage } from "@/data/meta-data";

export const metadata: Metadata = homePage.metadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/api/v1"
          as="fetch"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${localFont.className} flex flex-col h-screen bg-slate-50`}
      >
        <svg id="svg-sprite" className="hidden">
          <symbol id="paw" viewBox="0 0 800 843">
            <path
              fill="#000"
              d="M338.5 13.5c19.059-2.82 36.059 1.68 51 13.5 27.139 26.446 42.972 58.612 47.5 96.5 3.727 40.243-1.606 79.243-16 117-8.954 23.603-23.787 42.436-44.5 56.5-25.473 12.276-49.806 10.276-73-6-35.266-27.66-58.099-63.493-68.5-107.5-6.483-56.883 11.017-105.05 52.5-144.5 14.915-12.79 31.915-21.29 51-25.5zM596.5 62.5c16.62-2.262 31.62 1.571 45 11.5 22.711 18.903 36.544 43.07 41.5 72.5 11.947 62.175-6.22 113.342-54.5 153.5-20.269 16.97-43.269 28.97-69 36-19.308 4.699-37.974 3.032-56-5-14.806-9.74-24.639-23.24-29.5-40.5-5.128-20.51-5.794-41.176-2-62 7.598-45.509 25.264-86.509 53-123 19.5-21.662 43.334-35.995 71.5-43zM145.5 220.5c10.34-.832 20.007 1.335 29 6.5 32.28 22.679 52.446 53.513 60.5 92.5 9.445 49.224-1.888 92.891-34 131-20.871 23.518-47.037 36.518-78.5 39-34.841-3.334-60.008-20.667-75.5-52-5.108-16.633-6.774-33.633-5-51 5.974-49.593 24.307-93.927 55-133 8.274-9.28 17.441-17.447 27.5-24.5 6.682-3.942 13.682-6.775 21-8.5zM678.5 356.5c26.449-2.859 46.283 7.141 59.5 30 9.213 17.183 14.546 35.516 16 55 3.636 53.456-8.697 102.79-37 148-8.919 12.253-19.752 22.42-32.5 30.5-19.789 9.991-38.456 8.325-56-5-21.009-20.498-35.509-44.998-43.5-73.5-8.176-26.408-11.509-53.408-10-81 2.416-22.492 11.082-42.158 26-59 20.858-23.716 46.691-38.716 77.5-45zM475.5 510.5c-.073 1.527.594 2.527 2 3a138.7 138.7 0 017.5 14 2837.786 2837.786 0 0015.5 40c-.073 1.527.594 2.527 2 3 1.985 3.298 3.985 6.631 6 10 .238 1.904 1.238 3.238 3 4 1 .333 1.667 1 2 2-.073 1.527.594 2.527 2 3a424.237 424.237 0 0018 16.5l52 38a166.139 166.139 0 0119 18.5c-.073 1.527.594 2.527 2 3 2.043 1.079 3.376 2.746 4 5-.073 1.527.594 2.527 2 3 5.845 7.36 9.845 15.693 12 25-.09 2.652.576 4.985 2 7 4.043 22.186 2.876 44.186-3.5 66-10.728 30.386-31.894 49.219-63.5 56.5-28.25 5.608-56.584 5.942-85 1a489.173 489.173 0 01-49-9.5c-.734-1.208-1.067-2.541-1-4h-4c-1.599.268-2.932-.066-4-1-2.015-1.424-4.348-2.09-7-2-1.599.268-2.932-.066-4-1-2.015-1.424-4.348-2.09-7-2a184.675 184.675 0 01-27.5-7c-.739 1.074-1.739 1.741-3 2a647.728 647.728 0 01-38.5-12c-2.015-1.424-4.348-2.09-7-2-2.015-1.424-4.348-2.09-7-2a226.44 226.44 0 01-28-8c-2.015-1.424-4.348-2.09-7-2-2.015-1.424-4.348-2.09-7-2a722.438 722.438 0 01-119-42.5 265.632 265.632 0 01-27-15.5c-.473-1.406-1.473-2.073-3-2-.473-1.406-1.473-2.073-3-2-1.527.073-2.527-.594-3-2-.473-1.406-1.473-2.073-3-2a55.849 55.849 0 01-14-11c-1.085-2.087-2.751-3.42-5-4-33.681-30.744-41.848-67.411-24.5-110a138.781 138.781 0 017.5-14c1.406-.473 2.073-1.473 2-3 1.406-.473 2.073-1.473 2-3 .238-1.904 1.238-3.238 3-4 1.406-.473 2.073-1.473 2-3a57.484 57.484 0 019-9c2.589-.919 4.589-2.586 6-5 7.955-6.479 16.955-11.145 27-14 2.652.09 4.985-.576 7-2 1.068-.934 2.401-1.268 4-1 2.652.09 4.985-.576 7-2a1490.72 1490.72 0 0166-10.5c16.309-2.547 31.643-7.881 46-16a29940.047 29940.047 0 0033-19.5c1.527.073 2.527-.594 3-2 1.014-1.174 2.347-1.84 4-2 1.527.073 2.527-.594 3-2 25.636-15.825 53.302-20.658 83-14.5 29.162 5.917 55.162 18.25 78 37 4.291 4.445 7.958 9.278 11 14.5z"
            />
          </symbol>
        </svg>
        <Header />
        <main className="flex flex-col w-full relative text-black mx-auto md:p-0 p-4 flex-1 leading-6">
          {children}
        </main>
        <Footer />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
