"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Værdata from "@/components/Værdata";
import Rating from "@/components/Rating";
import Rutevelger from "@/components/Rutevelger";
import Image from "next/image";

export default function GimsdalstindPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 sm:p-20">
      <h1 className=" font-extrabold text-4xl p-8">Gimsdalstinden</h1>
      <div className="relative w-200 h-200">
        <Image
          src="/gimsdalstinden.jpg"
          alt="Gimsdalstinden"
          width={800}
          height={400}
          className="rounded-full object-cover w-full h-full"
        />
        <p className="font-light mt-2 text-center">
          Gimsdalstinden sett i fra Gimsdalssætra
        </p>
      </div>

      <p className="mt-4">
        Gimsdaldstind er med sine 1007 høydemeter over havet, en av de mange
        flotte turene man kan ta i Sykkylven. Turen byr på en magisk utover
        Sykkylven, Hammarsettindene & Straumshornet.
      </p>

      <h1 className="text-2xl mt-5 font-extrabold">Turbeskrivelse</h1>
      <Rutevelger />

      <div className="rounded-lg overflow-hidden shadow-lg flex-1 mt-4">
        <Image
          src="/veiskille.gif"
          alt="Veien deler seg."
          width={800}
          height={400}
          className="rounded-lg shadow-md w-full h-screen object-contain"
        />
        <p className="text-center mt-2 font-bold">
          Her er plassen hvor hvor råsene møtest.
        </p>
        <p className="text-center">
          Kommer man fra Blindheimsbakkene fortsetter man til høyre, kommer man
          fra Vikedalen tar man opp til venstre.
        </p>
      </div>

      <section className="rounded-lg overflow-hidden shadow-lg flex-1">
        <h2 className="mt-3 text-2xl font-extrabold">Turen mot Toppen</h2>
      </section>

      <section className="flex-center">
        <div className="flex-1">
          <Image
            src="/startmottopp.jpg"
            alt="Starten mot toppen"
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="font-bold  text-center">
            Her starter man oppover mot toppen, og det vil bli en god del
            brattere. Man kommer også inn i noe skog rett oppi her.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mt-2">
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/ut av skogen.jpeg"
            alt="Råsen etter skogspartiet"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Her har man kommet ut av skogen, og det blir litt brattere
          </p>
        </div>

        <div className="flex-2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/startpåur.jpeg"
            alt="Her starter uren"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Etter den "seige" motbakken må man krysse denne uren her.
          </p>
        </div>

        <div className="flex-2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/etteruren.gif"
            alt="Etter man har krysset uren"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Etter den første uren vil man komme hit. God utsikt her også!.
          </p>
        </div>

        <div className="flex-2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/eggen.gif"
            alt="Her er Eggen man kommer til"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Et lite stykke lenger oppe vil man komme til denne eggen her.
          </p>
        </div>
      </section>

      <h2 className="text-center font-extrabold mt-4 ">
        Nå kommer man til det partiet på turen, som er mest krevende & kan føles
        luftig.
      </h2>

      <section className="grid grid-cols-2 gap-6 mt-2">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/krevendeparti2.gif"
            alt="Starten på det krevende partiet"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-contain shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Her begynner man oppover, med enkel klyving.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/kommerhit.jpg"
            alt="Hit kommer man"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-contain shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Etter klyvingen, vil man komme opp hit.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/følgdenne.gif"
            alt="Følge denne eggen"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-contain shadow-md rounded-lg"
          />
          <p className="mt-2 font-bold text-center">
            Videre følger man denne eggen oppover.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/veivalg.gif"
            alt="To stier"
            width={800}
            height={400}
            className="w-full h-64 sm:h-96 object-contain shadow-md rounded-lg"
          />
          <div className="px-2 text-center">
            <p className="mt-2 font-bold text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
              Ett lite stykke lenger opp, kan man følge eggen som er mer luftig
              eller råsen til venstre
            </p>
          </div>
        </div>
      </section>

      <div className=" rounded-lg overflow-hidden shadow-lg mt-5">
        <Image
          src="/sistedel.gif"
          alt="Siste biten mot toppen"
          width={800}
          height={400}
          className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
        />
        <p className="mt-2 font-bold text-center text-sm sm:text-base leading-relaxed">
          Her ser man hvor man kommer igjen, om man går eggen eller råsen.
        </p>
      </div>

      <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-5">
        <h1 className="font-extrabold text-4xl p-2 text-center">Toppen!</h1>
        <p className="font-light text-center mb-2">
          Etter dette partiet er man oppe på Gimsdalstind.
        </p>
        <Image
          src="/Toppen3.jpeg"
          alt="Toppen"
          width={800}
          height={400}
          className="rounded-lg shadow-md w-full h-96 object-contain"
        />
        <p className="text-center">
          Fantastsk utsikt over Sykkylven & postkasse med bok man kan skrive seg
          inn i.
        </p>
      </div>

      <h2 className="font-semibold text-center">
        På toppen vil man ha panorama utsikt til andre topper rundt!
      </h2>

      <section className="grid grid-cols-1 gap-4">
        <div className="flex-1 flex-col rounded-lg overflow-hidden shadow-lg mt-5">
          <Image
            src="/Hammers.png"
            alt="Toppene rundt"
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="mt-2 mb-2 font-bold text-center">
            Her ser vi: Hammersettind fremst, Langfjellene til venstre, Blåtind
            & Lafjellet helt bak til venstre.
          </p>
          <Image
            src="/Straumshornet.png"
            alt="Toppene rundt"
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="mt-2 mb-2 font-bold text-center">
            Her ser vi: Dravlausegga & Straumshornet.
          </p>
          <Image
            src="/Borgundkollen.png"
            alt="Toppene rundt"
            width={800}
            height={400}
            className="rounded-lg shadow-md w-full h-96 object-contain"
          />
          <p className="mt-2 mb-2 font-bold text-center">
            Her ser vi: Borgundkollen.
          </p>
        </div>
      </section>

      <h1 className="text-center text-2xl font-extrabold mt-6">God Tur⛰️!.</h1>

      <div className="p-8">
        <p>Hvor godt likte du forklaringen?</p>
        <Rating max={5} value={rating} onChange={setRating} />
        <p className="text-center mt-2"> du ga {rating} stjerner</p>
      </div>

      <Værdata title="Gimsdalstind" lat={62.3416} lon={6.655} altitude={1007} />
    </div>
  );
}
