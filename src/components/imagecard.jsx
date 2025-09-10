import Link from "next/link";

export default function ImageCard() {
  return (
    <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg relative">
      <img
        src="/instagramkort.gif"
        alt="Fjell"
        width={1000}
        height={500}
        className="object-cover w-full h-56 brightness-75"
      />

      <div className="absolute inset-0 flex items-center justify-center gap-6">
        <Link href="https://www.facebook.com/bjorn.e.lyngstad/" target="_blank">
          <img
            src="/facebook.jpg"
            alt="Facebook"
            width={70}
            height={70}
            className="rounded-full hover:scale-110 transition"
          />
        </Link>

        <Link href="https://www.instagram.com/bjornlyngstad/" target="_blank">
          <img
            src="/instagram.jpg"
            alt="Instagram"
            width={70}
            height={70}
            className="rounded-full hover:scale-110 transition"
          />
        </Link>

        <a 
        href="https://mail.google.com/mail/?view=cm&to=bjornevensk8@gmail.com"
        rel="noopener noreferrer"
        >
          <img
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