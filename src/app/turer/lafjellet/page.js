"use client";

import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import LafjelletMap from "@/components/LafjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";
import Skiarena from "@/components/Skiarena";

const LafjelletMap = dynamic(() => import("@/components/LafjelletMap"), {
  ssr: false,
});

export default function LafjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center flex-1 ">
      <div className="text-center flex-center">
        <h1
          className="mb-4 mt-4 text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(to top, #1e293b 0%, #6b7280 30%, #f8fafc 60%, #bae6fd 85%, #38bdf8 100%)",
          }}
        >
          Lafjellet
        </h1>

        <div className="flex justify-center ">
          <Image
            src="/Lafjelletdal.jpg"
            alt="Lafjellet"
            width={1200}
            height={800}
            className="rounded-3xl object-contain"
          />
        </div>
        <h1 className="font-serif italic mb-2 mt-2">
          Lafjellet sett i fra Blåtinden
        </h1>

        <p className="font-serif italic mb-2 mt-6">
          Lafjellet ligger i Velledalen, men turen starter etter lite stykke før
          Sunnmørsalpane Skiarena på Fjellsætra i Sykkylven.
        </p>
        <p className="font-serif italic mb-2 mt-6">
          Fjellsætra er en hyttegrend i Sykkylven kommune, og er kjent for sitt skitrekk vinterstid.
        </p>

        <div className="mt-4 flex flex-col items-center mb-4">
                  <h2 className="font-semibold text-center">
                    Les mer om Fjellsætra Skiarena her!
                  </h2>
                  <Skiarena />
                </div>
        

        
        <h2 className="text-3xl font-semibold mb-2 mt-4">Turbeskrivelse</h2>
       
       <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1161}
          vertikalStigning={856}
          kilometer={6.62}
          tidsbruk="2-3 timer"
        />


        <section className="flex flex-col md:flex-row gap-6 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
            <p className="mt-4 mb-4">
              Etter å ha komt et lite stykke opp mot Fjellsæter, kommer man til denne parkeringen. 
              Som er utgangspunktet for turen til Lafjellet.⬇️
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1760039164945!6m8!1m7!1slI9M1ddo6o5bC6AROrwxpw!2m2!1d62.32682670720544!2d6.757637075295016!3f334.29280187875247!4f4.235370690399492!5f0.7820865974627469"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
            <p className="mt-4 mb-4">
              Etter man har fått parkert, starter turen opp denne grusveien her som ligger like vedsiden av parkeringen⬇️.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1758908015427!6m8!1m7!1s_VSzZ3vuEMbSmIbWOqTcGA!2m2!1d62.32814944238157!2d6.758293178381267!3f290.1921148800171!4f2.4877391115190335!5f3.123130152753552"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <h2 className="text-center text-xl font-extrabold mb-2">
          Her er ruten til Lafjellet.
        </h2>
        <div className="items-center flex justify-center w-full">
          <LafjelletMap />
        </div>

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <div className="flex justify-center">
            <Rating max={5} value={rating} onChange={setRating} />
          </div>
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>
        <Vaerdata
          title="Lafjellet"
          lat={62.32777}
          lon={6.712563}
          altitude={1161}
        />
      </div>
    </main>
  );
}
