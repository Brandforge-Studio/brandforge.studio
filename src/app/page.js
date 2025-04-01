import Logo from "./_components/Logo";
import Space from "./_components/Space";
import Asteroid from "./_components/Asteroid";
import Astronaut from "./_components/Astronaut";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap min-h-screen px-48 w-full">
      <div className="flex flex-col items-start gap-16 h-fit w-1/2">
        <h1 className="sr-only">Brand Forge Studio</h1>
        <Logo />
        <h2 className="animate-float-delay-2 font-sans font-semibold text-6xl z-20 text-left">
          We Help Businesses Secure a Competitive Edge on the Web.
        </h2>
      </div>
      <Space />
      <Asteroid />
      <div className="w-1/2">
        <Astronaut />
      </div>
      <div className="flex flex-row gap-32 items-center w-full">
        <div className="-scale-x-100 w-1/3">
          <img
            src="/laptop-icon.webp" 
            alt="Asteroid floating in space" 
            className="animate-float-delay-3 brightness-125 h-auto mix-blend-lighten"
          />
        </div>
        <div className="flex flex-col gap-8 w-2/3">
          <h3 className="animate-float font-sans font-semibold text-5xl z-20 text-left">
            We create exceptional websites.
          </h3>
          <p className="animate-float-delay font-sans font-light text-4xl">
            We design memorable, intuitive, and accessible websites uniquely tailored to your brand. Our creations deliver engaging experiences that resonate with your audience.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-32 items-center w-full">
        <div className="flex flex-col gap-8 w-2/3">
          <h3 className="animate-float-delay-2 font-sans font-semibold text-5xl z-20 text-left">
            We amplify your web presence.
          </h3>
          <p className="animate-float-delay-3 font-sans font-light text-4xl">
            We strategically manage your digital presence across websites, social media, and search engines. Our approach enhances visibility and reinforces your brand messaging.
          </p>
        </div>
        <img
          src="/phone-icon.webp" 
          alt="Asteroid floating in space" 
          className="animate-float w-1/3 h-auto brightness-125 mix-blend-color-dodge drop-shadow-[0_0_30px_rgba(0,62,255
          ,0.7)]"
        />
      </div>
    </div>
  );
}
