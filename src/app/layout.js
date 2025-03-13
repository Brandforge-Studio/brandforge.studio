import { Geist, Geist_Mono, Tilt_Warp } from "next/font/google";
import "./globals.css";
import PageNav from "./_components/PageNav";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt-warp",
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
        className={`${geistSans.variable} ${geistMono.variable} ${tiltWarp.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-cover bg-center p-2">
          <PageNav />
          <main className="flex-1 flex flex-col gap-8 items-center sm:items-start">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
