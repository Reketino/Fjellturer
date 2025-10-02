import Image from "next/image";

export default function LinkPreview() {
  return (
    <a
      href="https://morotur.no/tur/koppen-i-velledalen"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <div className="relative w-full h-48">
        <Image
          src="/Koppen.jpg"
          alt="Koppen i Velledalen"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className=" text-black font-bold text-lg">Koppen i Velledalen</h3>
        <p className="text-gray-600 text-sm">
          En fin fottur på 522 m.o.h i Sykkylven. Les mer på morotur.no!
        </p>
      </div>
    </a>
  );
}