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
      <div className="absolute top-36 left-36 w-1/3 h-1/3">
        <h1 className="sr-only">Brand Forge Studio</h1>
        <Logo />
      </div>
    </>
  );
}
