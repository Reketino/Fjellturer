"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Gimsdalstind from "@/components/gimsdalstind";
import Rating from "@/components/Rating";
import Rutevelger from "@/components/Rutevelger";

export default function GimsdalstindPage() {
  const [rating, setRating] =useState (0);
  
  return (
    <div className="flex flex-col items-center gap-4 p-6 sm:p-20">
     
        <h1 className=" font-extrabold text-4xl p-8">Gimsdalstinden</h1>
        <div className="relative w-200 h-200">
          <img
            src="/gimsdalstinden.jpg"
            alt="Gimsdalstinden"
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
          <img
          src="/veiskille.gif"
          alt="Råsene Møtes"
          className="rounded-lg shadow-md w-full h-screen object-contain"
          />
          <p className="text-center mt-2 font-bold">
            Her er plassen hvor hvor råsene møtest.
          </p>
          <p className="text-center">
            Kommer man fra Blindheimsbakkene fortsetter man til høyre, kommer man fra Vikedalen tar man opp til venstre.
          </p>
        </div>

        <section className="rounded-lg overflow-hidden shadow-lg flex-1">
         <h2 className="mt-3 font-extrabold">Turen mot Toppen</h2>
        </section>

      <div className="p-8">
        <p>Hvor godt likte du forklaringen?</p>
        <Rating max={5} value={rating} onChange={setRating} />
        <p className="text-center mt-2"> du ga {rating} stjerner</p>
        </div>


   <Gimsdalstind />
     </div>
  );
}
