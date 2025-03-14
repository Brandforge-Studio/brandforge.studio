import Logo from "./_components/Logo";
import Space from "./_components/Space";
import Asteroid from "./_components/Asteroid";
import Astronaut from "./_components/Astronaut";

export default function Home() {
  return (
    <>
      <Space />
      <Asteroid />
      <Astronaut />
      <div className="absolute top-36 left-36">
        <Logo />
      </div>
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <h2 className="text-center text-white text-4xl font-bold">Coming soon...</h2>
      </div>
    </>
  );
}
