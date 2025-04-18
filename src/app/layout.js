import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import PageNav from "./_components/PageNav";
import Footer from "./_components/Footer";
import Space from "./_components/Space";
const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brandforge Studio",
  description: "We empower brands to achieve a competitive advantage on the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} antialiased font-sans min-h-screen`}
      >
        <PageNav />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Space />
        <Footer />
      </body>
    </html>
  );
}
