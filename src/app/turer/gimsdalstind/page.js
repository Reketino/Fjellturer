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
          <p className="font-serif font-extralight p-2">
            Gimsdalstinden sett i fra Gimsdalssætra
          </p>
        </div>

        <h2 className=" text-2xl p-8 ">Turbeskrivelse</h2>
        <p>
          Gimsdaldstind er med sine 1007 høydemeter over havet,
          en av det mange flotte turene man kan ta i Sykkylven
         </p>

        <div className="text-center p-6 ">
          <p>
            Turen starter ved parkeringen til Høyseth, hvis man går opp i fra
            Vikedalen.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757444779712!6m8!1m7!1sWyZDdLBkccbXpz3S_ejv-g!2m2!1d62.3752727172618!2d6.599139845354096!3f139.985978452821!4f5.705509715956026!5f0.7820865974627469"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-96"
            />
            <p className="font-semibold">Parkeringen i Vikedalen🅿️.</p>
          </div>

          <p className="p-8">
            Videre fra parkeringa følger man veien til Høyseth, for så å gå opp
            til Gimsdalen.
          </p>
          <iframe
           src="https://www.google.com/maps/embed?pb=!4v1757532114647!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzQycWJORVE.!2m2!1d62.37464592857454!2d6.604316148612335!3f37.68798162662645!4f2.1572550912626838!5f0.45095857009"
           width="600"
           height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 sm:h-96"
          />
          <p className="font-size-sm font-semibold mb-6">
            Her ser man veien opp mot Høyseth, med Gimsdalstinden fremst, Hammarsettindene lenger bak og Borgundkollen til venstre.
          </p>
          <p className="mb-6">
            Grusveien går helt opp til Gimsdalen.
          </p>

        
          <p>
          Man kan også gå opp fra andre siden på Blindheimsbakkene, dette er
            en god del kortere.
          </p>
        </div>

        <Gimsdalstind />
      </main>
    </div>
  );
}
