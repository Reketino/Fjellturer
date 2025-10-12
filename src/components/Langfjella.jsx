import Image from "next/image";

export default function LangfjellaPreview() {
  return (
    <a
      href="https://morotur.no/tur/langfjella"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <div className="relative w-full h-48">
        <Image
          src="/Langfjella.jpg"
          alt="Langfjella"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className=" text-black font-bold text-lg">Langfjella</h3>
        <p className="text-gray-600 text-sm">
          Langfjella - 1118 m.o.h. Les mer på morotur.no!
        </p>
      </div>
    </a>
  );
}