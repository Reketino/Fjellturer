import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-[url('/Sykkylven.jpg')]  bg-no-repeat bg-cover min-h-[300px] min-w-[600px]">
      <h1 className="text-black text-right">Fjellturer i Sykkylven </h1>
      <ul className="flex flex-col md:flex-row gap-2">
        <li>
          <Link href="/">Hjem</Link>
        </li>
        <li>
          <Link href="/turer">Fjellturer</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}
