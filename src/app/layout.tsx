import yekanBakh from "../../fonts/yekanBakh";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متن تستی",
  description: "تست",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
