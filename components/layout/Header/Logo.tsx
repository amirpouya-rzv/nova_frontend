
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/60 text-lg font-extrabold text-primary-foreground shadow-md shadow-primary/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
        <Image
        src='/image/logo.WebP'
        alt="logo"
        width={100}
        height={100}/>
      </span>

      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-lg font-extrabold text-foreground">
        </span>
        {/* <span className="text-[15px] text-muted-foreground animate-bounce">
          چون لایق بهترین هایی
        </span> */}
      </span>
    </Link>
  );
}
