import Logo from "./_components/Logo";
import Space from "./_components/Space";
import Asteroid from "./_components/Asteroid";
import Astronaut from "./_components/Astronaut";
import NavButton from "./_components/NavButton";
export default function Home() {
  return (
    <>
      <header className="flex flex-row px-48 w-full">
        <div className="flex flex-col items-start gap-16 h-fit w-1/2">
          <h1 className="sr-only">Brand Forge Studio</h1>
          <Logo />
          <h2 className="animate-float-delay-2 font-semibold text-6xl z-20 text-left">
            Coming soon...
          </h2>
        </div>
        <div className="w-1/2 z-20">
          <Astronaut />
        </div>
      </header>
      <div className="-mt-44 py-48 px-48 w-full -z-1" 
        style={{ 
          clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)',
          background: 'linear-gradient(to bottom, black 30%, black 50%, rgba(0,0,0,0) 100%)'
        }}
      >
        <section className="flex flex-row gap-32 items-center w-full">
          <div className="brightness-125 mix-blend-light -scale-x-100 w-1/3">
            <img
              src="/laptop-icon.webp" 
              alt="Asteroid floating in space" 
              className="animate-float-delay-3 drop-shadow-[0_0_30px_rgba(0,62,255,0.7)]"
            />
          </div>
          <div className="flex flex-col gap-8 w-2/3">
            <h3 className="animate-float font-semibold text-5xl z-20 text-left">
              We create exceptional websites.
            </h3>
            <p className="animate-float-delay font-light text-4xl">
              We design memorable, intuitive, and accessible websites uniquely tailored to your brand. Our creations deliver engaging experiences that resonate with your audience.
            </p>
          </div>
        </section>
        <section className="flex flex-row gap-32 items-center w-full">
          <div className="flex flex-col gap-8 w-2/3">
            <h3 className="animate-float-delay-2 font-semibold text-5xl z-20 text-left">
              We amplify your web presence.
            </h3>
            <p className="animate-float-delay-3 font-light text-4xl">
              We strategically manage your digital presence across websites, social media, and search engines. Our approach enhances visibility and reinforces your brand messaging.
            </p>
          </div>
          <img
            src="/phone-icon.webp" 
            alt="Asteroid floating in space" 
            className="animate-float w-1/3 h-auto brightness-125 mix-blend-light drop-shadow-[0_0_30px_rgba(0,62,255,0.7)]"
          />
        </section>
        <div className="flex justify-center pt-16 w-full">
          <section className="flex flex-col justify-end items-end w-[50rem]">
            <h3 className="animate-float-delay-2 font-semibold text-5xl text-left w-full">Let's Make Something</h3>
            <h3 className="animate-float-delay-3 font-semibold pb-8 text-5xl text-right w-full">Awesome Together.</h3>
            <NavButton label="Get in Touch" linkedPath="/contact" solid />
          </section>
        </div>
      </div>
      <Space />
      <Asteroid />
    </>
  );
}
