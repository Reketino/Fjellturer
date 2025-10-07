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
});

export default function HoletindenePage() {
  const [rating, setRating] = useState(0);

  return (
    <main className="flex flex-col items-center gap-4 p-6 sm:p-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Holetindene</h1>
       
               <div className="relative flex justify-center w-full h-80 md:h-96 rounded-full overflow-hidden">
                 <Image
                   src="/Holetindene.jpg"
                   alt="Holetindene"
                   fill
                   className="object-contain"
                 />
               </div>
               <p className="font-serif italic mb-4 mt-2">Holetindene & Ystevasshornet sett fra Brunstadkollen</p>


          

        <p className="font-serif italic mb-2 mt-6">
          Holetindene finner du i vakre Velledalen, som er en 10 minutters
          kjøretur fra sentrum av Sykkylven.
        </p>
              
         <h2 className="text-2xl font-bold mb-2 mt-4">
          Turbeskrivelse
         </h2>

         <RuteInfo
          rangering="RØD"
          rangeringFarge="text-red-500"
          hoydemeter={1242}
          vertikalStigning={1160}
          kilometer={10.68}
          tidsbruk="3-5 timer"
        />

        <p className="font-serif italic mb-2 mt-4">
          Turen til Holetindene starter ved Brunstad Kraftverk, som er utgangspunktet til mange flotte turer i området.
        </p>
        <p className="font-serif italic mb-2 mt-2">
          Parkering ved Brunstad Kraftverk er gratis, og det er god plass til mange biler.
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
          Etter man har fått parkert går turen til Brunstadsætra, som du kan finner beskrivelse på her⬇️.
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
        


        

        <h2 className="text-center text-xl font-extrabold">
          Her er ruten opp til Holetindene.
        </h2>
        
        <div className="items-center flex justify-center w-full">
          <HoletindeneMap />
        </div>

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
