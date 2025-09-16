import React from "react";
import Link from "next/link";
import Gimsdalstind from "@/components/gimsdalstind";

export default function GimsdalstindPage() {
  return (
    <div className="text-center flex-center gap-2">
      <main className="flex flex-col items-center flex-1  sm:p-20">
        <h1 className="text-4xl p-8">Gimsdalstinden</h1>
        <div className="relative w-200 h-200">
          <img
            src="/gimsdalstinden.jpg"
            alt="Gimsdalstinden"
            className="rounded-full justify-center-safe set-h-[50px] "
          />
          <p className="font-light mt-1">
            Gimsdalstinden sett i fra Gimsdalssætra
          </p>

          <p className="mt-4">
            Gimsdaldstind er med sine 1007 høydemeter over havet, en av de mange
            flotte turene man kan ta i Sykkylven. Turen byr på en magisk utover
            Sykkylven, Hammarsettindene & Straumshornet.
          </p>

          <h1 className="text-2xl mt-5 font-extrabold">Turbeskrivelse</h1>
          <h2 className="mt-3 font font-extrabold">Fra Vikedalen</h2>
          <p className="mt-1">
            Turen starter ved parkeringen til Høyseth, hvis man går opp fra
            Vikedalen.
          </p>
        </div>

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
            <p className="font-semibold mt-2">Parkeringen i Vikedalen 🅿️.</p>
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
            <p className="font-semibold mt-2">
              Her ser man veien frem mot Høyseth, med Gimsdalstinden fremst,
              Hammarsettindene lenger bak og Borgundkollen til venstre.
            </p>
          </div>
        </section>

        <p className="mb-6 mt-10">
          Videre fra parkeringa følger man veien til Høyseth, for så å gå opp
          til Gimsdalen.
        </p>

        <p className="mb-6">
          Når man kommer til postkassa på Gimsdalen, tar man til høyre ned
          råsen, man vil da få øye på en bro.
        </p>

        <section className="grid grid-cols-2 gap-6">
          <div>
            <img
              src="/ned til rås.gif"
              alt="Råsen til broen"
              className="rounded-lg shadow-md w-full h-96 object-contain"
            />
            <p className="mt-2 text-center font-bold">
              Her er råsen som fører ned til broen.
            </p>
          </div>

          <div>
            <img
              src="/ned til bro.gif"
              alt="Broen"
              className="rounded-lg shadow-md w-full h-96 object-contain"
            />
            <p className="mt-2 text-center font-bold">
              Her kommer man ned til broen
            </p>
          </div>
        </section>

        <h2 className="mt-10 font-extrabold">Fra Blindheimsbakkene</h2>
        <p className="mt-5 mb-6">
          Man kan også gå opp fra andre siden av Vik elven på Blindheimsbakkene,
          dette er en god del kortere.
        </p>

        <section className="grid grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757775126054!6m8!1m7!1sSN6gbrjGmWhoA4uk-4mMVA!2m2!1d62.37427422446464!2d6.586577241891676!3f115.62029880003583!4f5.851649908097372!5f0.618543023297123"
              className="w-full h-64 sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="mt-2 font-bold">
              Her er grusveien hvor man kjører frem til parkeringen, NB: Bomvei
              70 kroner for å passere.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/veienvidere.gif"
              alt="Parkering Blindheimsbakkene"
              className="rounded-lg shadow-md w-full h-96 object-contain"
            />
            <p className="mt-2 font-bold">
              Etter å ha fulgt veien et godt stykke innover, vil man komme til
              parkeringen som vist over🅿️
            </p>
          </div>
        </section>

        <p className="mt-5">
          Etter man har parkert, er det bare å følge gruseveien som vist på
          bildet til høyre.
        </p>
        <p className="mt-2">
          Videre langs denne grusveien, vil man komme til noen hytter. Her er
          det mulighet for å ta en snarvei.
        </p>

        <section className="grid grid-cols-2 gap-0 mt-3">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/snarvei.jpeg"
              alt="snarveien"
              className="rounded-lg shadow-md w-full h-screen object-contain"
            />
            <p className="mt-2 font-bold">Opp her går snarveien.</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/vei.jpeg"
              alt="vei med gimsdalstind i bakgrunn"
              className="rounded-lg shadow-md w-full h-screen object-contain"
            />
            <p className=" mt-2 font-bold">
              Vis ikke er det bare å følge veien videre, med god utsikt til det
              endelige målet🚩.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/oppmotbro.jpeg"
              alt="vei opp mot broen"
              className="rounded-lg shadow-md w-full h-screen object-contain"
            />
            <p className="mt-2 font-bold">
              Et lite stykke oppi her, vil råsene fra Vikedalen og
              Blindheimsbakkene flettes sammen🔀.
            </p>
            </div>
        </section>

        <div className="rounded-lg overflow-hidden shadow-lg flex-1 mt-4">
          <img
          src="/veiskille.gif"
          alt="Råsene Møtes"
          className="rounded-lg shadow-md w-full h-screen object-contain"
          />
          <p className="mt-2 font-bold">
            Her er plassen hvor hvor råsene møtest.
          </p>
          <p>
            Kommer man fra Blindheimsbakkene fortsetter man til høyre, kommer man fra Vikedalen tar man opp til venstre.
          </p>
        </div>

        <section className="rounded-lg overflow-hidden shadow-lg flex-1">
         <h2 className="mt-3 font-extrabold">Turen mot Toppen</h2>
        </section>

      

        <Gimsdalstind />
      </main>
    </div>
  );
}
