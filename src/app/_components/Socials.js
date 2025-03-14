import Image from "next/image";
import Link from "next/link";
export default function Socials() {
  return (
    <nav className="flex flex-row gap-8 justify-center w-full">
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/facebookBrands.svg"
          alt="facebook"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/instagramBrands.svg"
          alt="instagram"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/linkedinInBrands.svg"
          alt="linkedin"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/tiktokBrands.svg"
          alt="tiktok"
          width={32}
          height={32}
        />
      </Link>
      <Link href="#">
        <Image
          className="dark:invert hover:scale-125 transition-all duration-300"
          src="/xTwitterBrands.svg"
          alt="twitter"
          width={32}
          height={32}
        />
      </Link>
    </nav>
  )
}