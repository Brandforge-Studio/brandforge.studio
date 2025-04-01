import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import PageNav from "./_components/PageNav";
import Footer from "./_components/Footer";

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
        className={`${lexendDeca.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-cover bg-center p-2">
          <PageNav />
          <main className="flex-1 flex flex-col gap-8 items-center sm:items-start">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
