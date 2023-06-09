import Header from "components/Header";
import Footer from "components/Footer";
import "styles/globals.css";

export const metadata = {
  title: "Ridge Runner",
  description: "都道府県別の総人口推移グラフを表示するアプリケーション",
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
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
