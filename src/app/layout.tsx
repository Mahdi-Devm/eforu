import Footer from "../../components/template/Footer/Footer";
import LayoutHeader from "../../components/template/Header/LayoutHeader";
import yekanBakh from "../../fonts/yekanBakh";
import OfflineToast from "../../lib/OfflineToast";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "باشگاه مشتریان انتخاب",
  description: "تست",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body>
        <OfflineToast />
        <LayoutHeader>
          <main>{children}</main>
        </LayoutHeader>
        <Footer />
      </body>
    </html>
  );
}
