import Link from "next/link";
import Image from "next/image";

export default function ImageCard() {
  return (
    <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg relative">
      <Image
        src="/instagramkort.gif"
        alt="Fjell"
        width={1000}
        height={500}
        className="object-cover w-full h-56 brightness-75"
        unoptimized
      />

      <div className="absolute inset-0 flex items-center justify-center gap-6">
        <Link
          href="https://www.facebook.com/bjorn.e.lyngstad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Facebook.jpg"
            alt="Facebook"
            width={70}
            height={70}
            className="rounded-full hover:scale-110 transition"
          />
        </Link>

        <Link
          href="https://www.instagram.com/beareven/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Instagram.jpg"
            alt="Instagram"
            width={70}
            height={70}
            className="rounded-full hover:scale-110 transition"
          />
        </Link>

        <a
          href="https://mail.google.com/mail/?view=cm&to=bjornevensk8@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/mail.jpg"
            alt="Email"
            width={70}
            height={70}
            className="rounded-full hover:scale-110 transition"
          />
        </a>
      </div>
    </div>
  );
}
