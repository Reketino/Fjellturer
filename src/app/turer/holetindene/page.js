"use client";

import Image from "next/image";
import { useState } from "react";
import Rating from "@/components/Rating";
import Vaerdata from "@/components/Vaerdata";
// import HoletindeneMap from "@/components/HoletindeneMap";
import RuteInfo from "@/components/RuteInfo";
import dynamic from "next/dynamic";
import Brunstadkollen from "@/components/Brunstadkollen";
import Brunstadsaetra from "@/components/Brunstadsaeter";

const Bkollen = Brunstadkollen;
const Bsaetra = Brunstadsaetra;

const HoletindeneMap = dynamic(() => import("@/components/HoletindeneMap"), {
  ssr: false,
  loading: () => <p>Laster kart...</p>,
});

const Holetind2Map = dynamic(() => import("@/components/Holetind2Map"), {
  ssr: false,
  loading: () => <p>Laster kart...</p>,
});

export default function HoletindenePage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center gap-4 p-6 sm:p-5">
      <div className="text-center">
        <h1
          className="mb-4 mt-2 text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(to top, #1e293b 0%, #6b7280 30%, #f8fafc 60%, #bae6fd 85%, #38bdf8 100%)",
          }}
        >
          Holetindene
        </h1>

        <div className="flex justify-center ">
          <Image
            src="/Holetindene.jpg"
            alt="Holetindene"
            width={1200}
            height={800}
            className="rounded-3xl object-contain"
          />
        </div>
        <p className="font-serif italic mb-2 mt-2">
          Holetindene & Ystevasshornet sett fra Brunstadkollen
        </p>

        <p className="font-serif italic mb-2 mt-6">
          Holetindene finner du i vakre Velledalen, som er en 10 minutters
          kjøretur fra sentrum av Sykkylven.
        </p>

        <h2 className="text-2xl font-bold mb-2 mt-4">Turbeskrivelse</h2>

        <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1242}
          vertikalStigning={1160}
          kilometer={10.68}
          tidsbruk="3-5 timer"
        />

        <p className="font-serif italic mb-2 mt-4">
          Turen til Holetindene starter ved Brunstad Kraftverk, som er
          utgangspunktet til mange flotte turer i området.
        </p>
        <p className="font-serif italic mb-2 mt-2">
          Parkering ved Brunstad Kraftverk er gratis, og det er god plass til
          mange biler.
        </p>

        <section className="flex flex-col md:flex-row gap-6 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1759236561019!6m8!1m7!1s-ChCOP4YASvsu53v_kijiQ!2m2!1d62.28926887664282!2d6.677389306325523!3f186.48504421250738!4f1.5872296289047085!5f1.0385685648397978"
              className="w-full h-64 sm:h-96"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-center font-semibold mt-2">
              Her kjører man inn til parkeringen, som ligger ved Brunstad
              Kraftverk🚗💨.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1759237164737!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VrdnU2R2c.!2m2!1d62.28469247446589!2d6.676646929686758!3f157.6202419779867!4f2.3026696858884748!5f0.8170337928759928"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-center font-semibold mt-2">
              Her er parkeringen ved Brunstad Kraftverk 🅿️.
            </p>
          </div>
        </section>

        <p className="font-serif italic mt-4">
          Etter man har fått parkert går turen til Brunstadsætra, som du kan
          finner beskrivelse på her⬇️.
        </p>
        <div className="mt-4 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">
            Ruten til Brunstadsætra:
          </h2>
          <Brunstadsaetra />
        </div>

        <p className="font-serif italic">
          Etter en liten pust i bakken på Brunstadsætra, går turen videre til
          Brunstadkollen, som du kan finne beskrivelse på her⬇️.
        </p>
        <div className="mt-4 flex flex-col items-center mb-4">
          <h2 className="font-semibold text-center">
            Ruten til Brunstadkollen:
          </h2>
          <Brunstadkollen />
        </div>

        <p className="font-serif italic mt-4 mb-2">
          Etter man har komt til Brunstadkollen gjenstår den siste bratte biten
          opp til Holetindene.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-4">
          <Image
            src="/veiopphtind.gif"
            alt="Veien opp til Holetindene"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            unoptimized
          />
          <p className="font-serif italic text-center font-semibold mt-2">
            Veien opp til Holetindene.
          </p>
          <p className="text-center mt-2 mb-4">
            ⚠️ Råsen kan være litt vanskelig å finne.
          </p>
        </div>

        <p className="font-serif italic mt-4">
          Det er også mulig å følge hele ryggen opp til Holetind.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-4">
          <p className="text-center  mt-2 mb-2">
            Legger ved film på den ruten her ⬇️
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-jxi2nq3MKA?si=goSV-LZf2dRAdWMS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </p>
        </div>

        <h2 className="text-center text-xl font-extrabold mt-4 mb-4">
          Toppen!🏔️
        </h2>

        <section className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-4">
          <div className="flex justify-center">
            <video
              src="/Toppenhtind.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg  w-[300px] h-[500px] object-cover"
            />
          </div>
          <p className="font-serif italic text-center font-semibold mt-2 mb-4">
            Her er varden på toppen av Holetind (1242moh)🏔️.
          </p>
        </section>

        <h2 className="text-center text-xl font-extrabold mb-4">
          Her er rutene opp til Holetindene.
        </h2>

        <section className="flex flex-col md:flex-row justify-center items-start gap-8 mt-2 mb-6">
          <div className="w-full md:w-1/2 max-w-[500px] text-center">
            <p className="mb-2 font-semibold">
              Man kan velge å gå av før man kommer til Brunstadkollen, som man
              ser på ruten her⬇️
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <HoletindeneMap />
            </div>
            <p className="mb-2 mt-2 font-semibold">
              ⚠️ Her må man finne en grei plass å krysse elven!.
            </p>
          </div>

          <div className="w-full md:w-1/2 max-w-[500px] text-center">
            <p className="mb-2 font-semibold">
              Eller gå helt opp til Brunstadkollen, og gå opp derfra derfra, som
              man ser her⬇️
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Holetind2Map />
            </div>
          </div>
        </section>

        <h2 className="text-center text-4xl font-bold mt-4 mb-4">God Tur!🚶‍♂️</h2>

        <div className="p-8 text-center">
          <p>Hvor godt likte du forklaringen?</p>
          <div className="flex justify-center">
            <Rating max={5} value={rating} onChange={setRating} />
          </div>
          <p className="text-center mt-2"> du ga {rating} stjerner</p>
        </div>

        <Vaerdata
          title="Holetindene"
          lat={62.282961}
          lon={6.724356}
          altitude={1242}
        />
      </div>
    </main>
  );
}
