import Logo from "./_components/Logo";
import AnimatedBackground from "./_components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="absolute top-36 left-36">
        <Logo />
      </div>
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <h2 className="text-center text-white text-4xl font-bold">Coming soon...</h2>
      </div>
    </>
  );
}
