import Footer from "./_components/Footer";
import Image from "next/image";
import Space from "./_components/Space";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Brandforge Studio"
          width={1080}
          height={500}
          className="p-10 md:w-2/3 h-auto"
        />
        <h1 className="pb-10 text-white md:text-6xl text-4xl font-bold text-center">An Epic Web Experience Awaits</h1>
        <h2 className="pb-10 text-white md:text-4xl text-2xl font-bold text-center">Coming Soon...</h2>
      </div>
      <Footer />
      <Space />
    </div>
  );
}
