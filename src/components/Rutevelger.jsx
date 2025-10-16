"use client";

import { useState } from "react";
import RuteInfo from "./RuteInfo";
import dynamic from "next/dynamic";
import Image from "next/image";

const BlindheimMap = dynamic(() => import("@/components/BlindheimMap"), {
  ssr: false,
});
const VikedalenMap = dynamic(() => import("@/components/VikedalenMap"), {
  ssr: false,
});

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
    <main className="mt-8 w-full max-w-5xl mx-auto">
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => toggleRute("vikedalen")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("vikedalen")
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          }`}
        >
          Fra Vikedalen
        </button>
        <button
          onClick={() => toggleRute("blindheimsbakkane")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("blindheimsbakkane")
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          }`}
        >
          Fra Blindheimsbakkane
        </button>
      </div>

      {valgt.length === 0 && (
        <p className="text-center text-white italic">
          Velg en eller begge rutene for å se turbeskrivelsen.
        </p>
      )}

      {valgt.includes("vikedalen") && (
        <section className="mt-10 max-w-4xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold">Fra Vikedalen</h2>
          <div className="flex justify-center mt-2">
            <RuteInfo
              rangering="RØD"
              rangeringFarge="text-red-500"
              hoydemeter={1007}
              vertikalStigning={968}
              kilometer={12.26}
              tidsbruk="3-5 timer"
            />
          </div>

          <p className="text-center mt-2 mb-4">
            Turen starter ved parkeringen til Høyset i Vikedalen.
          </p>

          <section className="flex flex-col md:flex-row gap-6 mt-2">
            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1757708371385!6m8!1m7!1sWyZDdLBkccbXpz3S_ejv-g!2m2!1d62.3752727172618!2d6.599139845354096!3f125.24832946725054!4f0.7656633566013937!5f1.484598564989514"
                className="w-full h-64 sm:h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="text-center font-semibold mt-2">
                Parkeringen i Vikedalen 🅿️.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1757708567486!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzQycWJORVE.!2m2!1d62.37464592857454!2d6.604316148612335!3f47.8597358909613!4f1.6102004157385608!5f1.9155630343755052"
                className="w-full h-64 sm:h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="text-center font-semibold mt-1">
                Veien frem mot Høyset, med god utsikt til målet🏁
              </p>
            </div>
          </section>

          <p className="text-center mb-2 mt-4">
            Videre fra parkeringa følger man veien til Høyset, for så å gå opp
            til Gimsdalen.
          </p>

          <section className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/Postkasse.png"
                alt="Postkassen på Høyseth"
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
              />
              <p className="text-center font-bold mt-1 mb-4">
                Postkassen på Høyset, med bok å skrive seg inn i.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/oppmotgdal.png"
                alt="Veien opp til Gimsdalen"
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
              />
              <p className="text-center font-bold mt-1 mb-4">
                Veien opp til Gimsdalen fra Høyseth
              </p>
            </div>
          </section>

          <p className="text-center mb-3">
            Når man kommer til postkassa på Gimsdalen tar man til høyre ned
            råsen, man vil da få øye på en bro.
          </p>

          <section className="flex-center">
            <div className="flex-1 mb-2 mt-1">
              <Image
                src="/pkassegdal.png"
                alt="Postkassen Gimsdal"
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
              />
              <p className="mt-0.5 text-center mb-4 font-bold">
                Postkassen på Gimsdalen & hvor man går ned til råsen.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <div>
              <Image
                src="/ned til raas.gif"
                alt="Råsen til broen"
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
                unoptimized
              />
              <p className="mt-1 text-center font-bold">
                Her er råsen som fører ned til broen.
              </p>
            </div>

            <div>
              <Image
                src="/ned til bro.gif"
                alt="Broen"
                width={800}
                height={400}
                className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
                unoptimized
              />
              <p className="mt-1 text-center font-bold">
                Her kommer man ned til broen.
              </p>
            </div>
          </section>

          <p className="text-center mt-2">
            Så krysser man broen & følger stien videre opp.
          </p>

          <p className="text-center mb-4">
            Man vil da møte råsen som går fra Blindheimsbakkene
          </p>

          <p className="font-bold text-xl mt-6 flex justify-center">
            Her er turen fra Vikedalen.
          </p>

          <div className="col-span-2 justify-items-center mx-auto w-full mt-0.5">
            <VikedalenMap />
          </div>
        </section>
      )}

      {valgt.includes("blindheimsbakkane") && (
        <section className="mt-10">
          <h2 className="text-center text-xl font-bold">
            Fra Blindheimsbakkane
          </h2>

          <div className="flex items-center justify-center mt-2">
            <RuteInfo
              rangering="RØD"
              rangeringFarge="text-red-500"
              hoydemeter={1007}
              vertikalStigning={806}
              kilometer={7.65}
              tidsbruk="3-4 timer"
            />
          </div>

          <p className="text-center mt-2">
            På Blindheimsbakkene kjører man av ved en grusvei & frem til
            parkering, hvor turen starter.
          </p>
          <p className="text-center font-extrabold mb-2">
            ⚠️ Bomvei koster 70 kroner, om man vil ha med seg kjøretøy.
          </p>

          <section className="grid grid-cols-2 gap-6 mt-2">
            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1757775126054!6m8!1m7!1sSN6gbrjGmWhoA4uk-4mMVA!2m2!1d62.37427422446464!2d6.586577241891676!3f115.62029880003583!4f5.851649908097372!5f0.618543023297123"
                className="w-full aspect-video object-contain"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="text-center font-bold">
                Grusveien man kjører frem til parkeringen.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/parkering.gif"
                alt="Parkering Blindheimsbakkene"
                width={800}
                height={400}
                className="w-full aspect-video object-contain bg-black"
                unoptimized
              />
              <p className="text-center font-bold">
                Parkeringen som ligger et stykke lenger frem🅿️.
              </p>
            </div>
          </section>

          <p className="text-center mt-4">
            Etter man har parkert, er det bare å følge gruseveien som vist på
            bildet til høyre.
          </p>

          <p className="text-center mt-2">
            Videre langs denne grusveien, vil man komme til noen hytter. Her er
            det mulighet for å ta en snarvei.
          </p>

          <section className="grid grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/snarvei.png"
                alt="snarveien"
                width={900}
                height={600}
                className="rounded-lg shadow-md w-full h-96 object-cover"
              />
              <p className="text-center mb-4 font-bold">
                Opp her går snarveien.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/veien.png"
                alt="vei med gimsdalstind i bakgrunn"
                width={900}
                height={600}
                className="rounded-lg shadow-md w-full h-96 object-cover"
              />
              <p className="text-center font-bold">
                Ellers følger man bare veien.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg flex-1">
              <Image
                src="/tur.png"
                alt="vei opp mot broen"
                width={900}
                height={600}
                className="rounded-lg shadow-md w-full h-96 object-cover"
              />
              <p className="text-center  font-bold">
                Rett opp her møtes råsene fra Vikedalen & Blindheimsbakkene.
              </p>
            </div>
          </section>

          <p className="font-bold text-xl mt-6 flex justify-center">
            Her er turen fra Blindheimsbakkene
          </p>

          <div className="flex justify-center w-full mx-auto mt-1">
            <BlindheimMap />
          </div>
        </section>
      )}
    </main>
  );
}
