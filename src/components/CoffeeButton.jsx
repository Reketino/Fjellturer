"use client";

export default function CoffeeButton() {
  return (
   <a
      href="https://www.buymeacoffee.com/reketino"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center bg-yellow-400 hover:bg-yellow-300 text-black rounded-full shadow-lg overflow-hidden transition-all duration-300 w-12 hover:w-60 px-3 z-50"
    >
      <span className="text-2xl">☕</span>
      <span className="ml-2 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        Støtt meg med en Kaffi!
      </span>
    </a>
  );
}