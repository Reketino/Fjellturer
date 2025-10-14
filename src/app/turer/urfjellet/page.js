"use client";

import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import UrfjelletMap from "@/components/UrrfjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";
import Koppen from "@/components/Koppen";

const UrfjelletMap = dynamic(() => import("@/components/UrrfjelletMap"), {
  ssr: false,
  loading: () => <p>Laster kart...</p>,
});

export default function UrfjelletPage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center gap-4 p-6 sm:p-5">
      <div className="text-center flex-center">
        <h1
          className="mb-4 mt-2 text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(to top, #1e293b 0%, #6b7280 30%, #f8fafc 60%, #bae6fd 85%, #38bdf8 100%)",
          }}
        >
          Urfjellet
        </h1>

        <div className="flex justify-center">
          <Image
            src="/urfjellet.jpg"
            alt="Urfjellet"
            width={960}
            height={600}
            className="rounded-3xl object-cover"
          />
        </div>
        <p className=" text-center font-bold mb-2">
          Urfjellet sett i fra Koppen
        </p>

        
        <p className="text-center font-serif italic mt-2">
          Urfjellet på 1267, er enda en av de mange flotte & lengre turene fra
          Velledalen.
        </p>
        <p className="text-center font-serif italic mb-4">
          På toppen vil man få en fantastisk utsikt over Hammarsettindene,
          Langeneset, ned mot Sykkylven & utover mot Ålesund.
        </p>

        <h2 className="text-3xl font-semibold mb-2 mt-4">Turbeskrivelse</h2>

        <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1267}
          vertikalStigning={1255}
          kilometer={9.75}
          tidsbruk="4-6 timer"
        />
        <p className="text-center mt-4 mb-2">
          Turen starter ved parkeringen som ligger like over fylkesvei 60 i Velledalen, som man ser her⬇️.
        </p>

        <div className="max-w-2xl w-full mx-auto rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1759416354794!6m8!1m7!1sVB8tHFsEs5ySb0u_Z5tLfA!2m2!1d62.29194116728266!2d6.657225408158998!3f57.65601464103331!4f7.634504413804564!5f2.347694816175464"
            className="w-full h-64 sm:h-96"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className=" text-center font-bold mt-0.5">
            Parkeringen🅿️.
          </p>
        </div>

        <p className="text-center mt-2">
          Etter man har parkert går turen først til Koppen,
        </p>
        <p className="text-center mb-2">
           som du finner
          beskrivelse på her⬇️.
        </p>

        <div className="mt-4 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">
            Ruten til Koppen:
          </h2>
          <Koppen />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
          <p className="text-center  mt-2 mb-2">
            Etter man har komt på Koppen, følger man god sti videre mot
            Svadfjellet.
          </p>
          <Image
            src="/Svadfjellet.gif"
            alt="Svadfjellet sett fra Koppen"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            unoptimized
          />
          <p className="text-center font-bold mb-0.5">
            Svadfjellet sett fra Koppen.
          </p>
        </div>

        <p className="text-center  mt-2 mb-2">
          Når man har kommet på Svadfjellet, gjenstår den siste tyngste biten
          opp til Urfjellet.
        </p>

         <p className="text-center mb-2">
            Som man ser på bildet og videoen under ⬇️
          </p>

       
            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/urfjelletopp.png"
                alt="Urfjellet sett fra Svadfjellet"
                width={500}
                height={400}
                className="rounded-lg shadow-md w-full h-96 object-contain"
              />
              <p className=" text-center font-bold mt-0.5 mb-2">
                ⚠️ Stien er mot slutten merket med varder, men masse ur!.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-4">
              <iframe
                width="360"
                height="315"
                src="https://www.youtube.com/embed/xnDaPwVOx-Y?si=6jUVaxlg1KNVaOtD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="lg:w-2xl"
              />
              <p className="font-serif italic text-center font-semibold mt-0.5 mb-4">
                🎬 God film som viser ruten
              </p>
            </div>
       

        

        <h2 className=" text-4xl font-bold text-center mt-4 mb-2">Toppen!🏔️</h2>

        <section className="grid grid-cols-2 gap-4 mt-4">
        <div className="rounded-lg overflow-hidden shadow-lg flex-1">
          <Image
            src="/urfjelletutsikt.png"
            alt="Utsikt fra Toppen av Urfjellet"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-cover"
          />
           <p className="text-center font-bold mt-0.5">
           Majestetisk utsikt over Hammarsettindene, Sykkylven & Ålesund👑.
        </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg flex-1">
          <Image
            src="/urfjellet topp 2.jpg"
            alt="Utsikt fra Toppen av Urfjellet"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-cover"
          />
          <p className="text-center font-bold mt-0.5">
            God oversikt over ryggen til Hammarsettindene🗻
          </p>
        </div>
        </section>

        <h2 className="text-center text-xl font-extrabold mt-4 mb-2">
          Her er ruten opp til Urfjellet.
        </h2>
        <div className="items-center flex justify-center w-full">
          <UrfjelletMap />
        </div>

        <h2 className="text-center text-4xl font-bold mt-4 mb-4">God Tur!🚶‍♂️</h2>

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <div className="flex justify-center">
            <Rating max={5} value={rating} onChange={setRating} />
          </div>
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>
        <Vaerdata
          title="Urfjellet"
          lat={62.325179}
          lon={6.682832}
          altitude={1267}
        />
      </div>
    </main>
  );
}
