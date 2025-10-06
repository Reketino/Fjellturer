import Image from "next/image";

export default function LinkPreview() {
  return (
    <a
      href="https://ut.no/turforslag/118688/brunstadstra-via-morkja"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <div className="relative w-full h-48">
        <Image
          src="/brunstadsaeter.jpg"
          alt="Brunstadsætra"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className=" text-black font-bold text-lg">Brunstadsaetra</h3>
        <p className="text-gray-600 text-sm">
          En fin fottur til Brunstadsætra i Sykkylven. Les mer på ut.no!
        </p>
      </div>
    </a>
  );
}