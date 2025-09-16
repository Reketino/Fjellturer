"use client;"

import { useState } from "react"

export default function Rutevelger() {
  const [valgt, setValgt] = useState([]);

  const toggleRute = (rute) => {
    if (valgt.includes(rute)) {
      setValgt(valgt.filter((r) => r !== rute));
    } else {
      setValgt([...valgt, rute]);
    }
  };

  return (
    <div className="mt-8 w-full max-w-5xl">
      {/* Knappene */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => toggleRute("vikedalen")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("vikedalen")
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Fra Vikedalen
        </button>
        <button
          onClick={() => toggleRute("blindheimsbakkane")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("blindheimsbakkane")
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Fra Blindheimsbakkane
        </button>
      </div>

      {valgt.length === 0 && (
        <p className="text-center text-gray-600 italic">
          Velg en eller begge rutene for å se turbeskrivelsen.
        </p>
      )}

      {/* Vikedalen innhold */}
      {valgt.includes("vikedalen") && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">Fra Vikedalen</h2>
          <p className="mt-2">
            Turen starter ved parkeringen til Høyseth, hvis man går opp fra
            Vikedalen.
          </p>
          {/* 👉 Her limer du inn hele Vikedalen-beskrivelsen din (iframe, bilder, tekst) */}
        </section>
      )}

      {/* Blindheimsbakkane innhold */}
      {valgt.includes("blindheimsbakkane") && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">Fra Blindheimsbakkane</h2>
          <p className="mt-2">
            Man kan også gå opp fra andre siden av Vik elven på Blindheimsbakkane,
            dette er en god del kortere.
          </p>
          {/* 👉 Her limer du inn hele Blindheimsbakkane-beskrivelsen din */}
        </section>
      )}
    </div>
  );
}