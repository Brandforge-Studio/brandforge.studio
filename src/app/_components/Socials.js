import Image from "next/image";
import Link from "next/link";
export default function Socials() {
  return (
    <nav className="flex flex-row gap-8 justify-center w-full">
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/facebook-brands.svg"
          alt="facebook"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/instagram-brands.svg"
          alt="instagram"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/linkedin-in-brands.svg"
          alt="linkedin"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/tiktok-brands.svg"
          alt="tiktok"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/x-twitter-brands.svg"
          alt="twitter"
          width={32}
          height={32}
        />
      </Link>
    </nav>
  )
}