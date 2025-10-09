import Image from "next/image";

export default function LinkPreview() {
  return (
    <a
      href="https://www.sunnmorsalpane.no/"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <div className="relative w-full h-48">
        <Image
          src="/fjellsaetra.jpg"
          alt="Fjellsaetra Skiarena"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className=" text-black font-bold text-lg">Fjellsætra</h3>
        <p className="text-gray-600 text-sm">
          Skiarena i hjertet av Sunnmørsalpene. Les mer på sunnmorsalpane.no!
        </p>
      </div>
    </a>
  );
}