"use client";

import { useState } from "react";
import Vaerdata from "@/components/Vaerdata";
import Image from "next/image";
// import LafjelletMap from "@/components/LafjelletMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";
import Skiarena from "@/components/Skiarena";
import Langfjella from "@/components/Langfjella";
import RatingSection from "@/components/RatingSection";

const LafjelletMap = dynamic(() => import("@/components/LafjelletMap"), {
  ssr: false,
  loading: () => <p>Laster kart...</p>,
});

export default function LafjelletPage() {
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
          Lafjellet
        </h1>

        <div className="flex justify-center">
          <Image
            src="/Lafjelletdal.jpg"
            alt="Lafjellet"
            width={1200}
            height={800}
            className="rounded-3xl object-contain"
          />
        </div>
        <p className="font-serif italic font-semibold mb-2">
          Lafjellet sett i fra Blåtinden
        </p>

        <p className="mb-2 mt-6">
          Lafjellet ligger i Velledalen, men turen starter etter lite stykke før
          Sunnmørsalpane Skiarena på Fjellsætra i Sykkylven.
        </p>
        <p className="mb-2 mt-6">
          Fjellsætra er en hyttegrend i Sykkylven kommune, og er kjent for sitt
          skitrekk vinterstid.
        </p>

        <div className="mt-4 flex flex-col items-center mb-4">
          <p className="font-semibold text-center">
            Les mer om Fjellsætra Skiarena her!
          </p>
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
        <p className="mt-2">
          Etter å ha komt et lite stykke opp mot Fjellsæter, kommer man til
          parkeringen. Som er utgangspunktet for turen til Lafjellet.
        </p>
        <p className="mb-2">
          Videre etter man har fått parkert, starter turen opp grusveien som
          ligger like ved parkeringen.
        </p>

        <section className="flex flex-col md:flex-row gap-6 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <p className=" text-center mt-2 font-bold">Parkeringen⬇️.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1760039164945!6m8!1m7!1slI9M1ddo6o5bC6AROrwxpw!2m2!1d62.32682670720544!2d6.757637075295016!3f334.29280187875247!4f4.235370690399492!5f0.7820865974627469"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <p className="text-center mt-2 font-bold">Grusveien⬇️.</p>
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

        <p className="mt-4 mb-4">
          Videre følger man samme ruten et lite stykke mot Langfjellet
        </p>
        <p className="mt-4 mb-4">Linker til den her⬇️</p>

        <div className="mt-4 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">Ruten til Langfjella:</h2>
          <Langfjella />
        </div>

        <p className="mt-4 ">
          Etter man har komt et stykke opp mot Sunndalsgrova & råsen begynner å
          flate litt ut,
        </p>
        <p className="mb-4">
          tar man av til venstre som jeg har krysset av her.⬇️
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-4">
          <Image
            src="/Lafjelletkryss.gif"
            alt="Kryss ved Lafjellet"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            unoptimized
          />
          <p className="font-italic font-semibold">
            ⚠️ Stien kan være vanskelig å finne!.⚠️
          </p>
        </div>

        <p className="mt-4">Man følger så den bratte ryggen opp.</p>
        <p className="mb-2">Råsen kan være vanskelig å finne i starten.</p>

        <div className=" overflow-hidden  flex flex-col items-center mb-4">
          <video
            src="/utydeligsti.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg  w-[300px] h-[500px] object-cover"
          />
          <p className=" text-center font-bold">⚠️ Utydelig Sti.</p>
        </div>

        <p className="mt-4">
          Oppe langs ryggen vil stien bli betraktelig mer synlig & enklere å
          finne.
        </p>
        <p className="mt-2">Som man ser her⬇️</p>

        <div className=" overflow-hidden  flex flex-col items-center mb-4">
          <video
            src="/langsrygg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg  w-[300px] h-[500px] object-cover"
          />
          <p className=" text-center font-bold">Tydligere Sti.</p>
        </div>

        <p className="mt-4 mb-4">
          Et lite stykke etter eggen, må man krysse en ur.
        </p>

        <div className="flex-2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/urparti.gif"
            alt="Partiet med en del ur"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-contain shadow-md rounded-lg"
            unoptimized
          />
          <p className="text-center font-bold mb-2">⚠️ Partiet med ur.</p>
        </div>

        <p className="mt-2">Etter man har krysset dette partiet,</p>
        <p className="mb-4">ser man topp varden lenger fremme.</p>
        <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-2 mb-4">
          <Image
            src="/toppvarden.jpeg"
            alt="Utsikt mot Toppen av Lafjellet"
            width={1000}
            height={800}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="text-center font-semibold">
            Her kommer man opp mot varden.
          </p>
        </div>

        <h2 className="text-center text-2xl font-extrabold mt-4 mb-2">
          Toppen!🏔️
        </h2>

        <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-2">
          <Image
            src="/topplafjellet.jpeg"
            alt="Toppen"
            width={1000}
            height={800}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="text-center font-semibold font-serif italic">
            Varden på toppen av Lafjellet (1161moh)🏔️.
          </p>
        </div>

        <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-5">
          <Image
            src="/toppenlafjell.png"
            alt="Toppen"
            width={1000}
            height={800}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="text-center font-semibold font-serif italic ">
            Fantastisk utsikt over Blåtind, Langfjella, Borgundkollen,
          </p>
          <p className="text-center font-semibold font-serif italic">
            Hammarsettindene & helt ned til Sykkylven.
          </p>
        </div>

        <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-5 mb-5">
          <Image
            src="/nysaeter.png"
            alt="Fjellsaeter fra lafjellet"
            width={1000}
            height={800}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="text-center font-semibold font-serif italic">
            Man får også en fantastisk utsikt, av Fjellsæter & Roaldshornet.
          </p>
        </div>

        <h2 className="text-center text-2xl font-extrabold mt-6 mb-6">
          God Tur⛰️!.
        </h2>

        <h2 className="text-center text-xl font-extrabold mb-2">
          Her er ruten til Lafjellet.
        </h2>
        <div className="items-center flex justify-center w-full">
          <LafjelletMap />
        </div>

        <RatingSection page="Lafjellet" />
        
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
