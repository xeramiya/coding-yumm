import Header from "components/Header";
import Footer from "components/Footer";
import { M_PLUS_2 } from "next/font/google";
import "style/global.scss";

const MPlus2 = M_PLUS_2({
  subsets: ["latin"],
  variable: "--font-mplus2",
  display: "swap",
});

export const metadata = {
  title: "都道府県別人口推移表示システム",
  description: "都道府県別の人口構成ごとの推移をグラフで表示します。",
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.png",
    apple: "/favicon/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/favicon.png",
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "" },
    { color: "" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${MPlus2.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
