import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between p-6 min-h-[300px] bg-no-repeat bg-cover bg-[url('/Sykkylven.jpg')]">
      
      <div className="absolute inset-0 bg-black/30"></div>

     
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <h1 className="text-white text-3xl font-extrabold drop-shadow-lg mb-4 md:mb-0">
          Fjellturer i Sykkylven
        </h1>

        <ul className="flex flex-col md:flex-row gap-2">
          {[
            { href: "/", text: "Hjem" },
            { href: "/turer", text: "Fjellturer" },
            { href: "/kontakt", text: "Kontakt" },
          ].map(({ href, text }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white text-lg font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition duration-300 drop-shadow-md"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}