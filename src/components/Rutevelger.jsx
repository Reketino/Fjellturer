"use client;"
import RuteInfo from "./RuteInfo";
import { useState } from "react"

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
    <div className="mt-8 w-full max-w-5xl">
      
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => toggleRute("vikedalen")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("vikedalen")
              ? "bg-blue-600 text-white"
              : "bg-black"
          }`}
        >
          Fra Vikedalen
        </button>
        <button
          onClick={() => toggleRute("blindheimsbakkane")}
          className={`px-4 py-2 rounded-lg font-bold shadow ${
            valgt.includes("blindheimsbakkane")
              ? "bg-blue-600 text-white"
              : "bg-black"
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
          <h2 className=" text-center text-xl font-bold">Fra Vikedalen</h2>
           
           <div className="flex items-center justify-center ">
                     <RuteInfo
                     rangering="RØD"
                     rangeringFarge="text-red-500"
                     hoydemeter={1007}
                     vertikalStigning={968}
                     kilometer={12.26}
                     tidsbruk="3-5 timer"
                    />
                    </div>

          <p className=" text-center mt-2">
            Turen starter ved parkeringen til Høyseth, hvis man går opp fra
            Vikedalen.</p>
            
                     
          
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
            <p className=" text-center font-semibold mt-2">Parkeringen i Vikedalen 🅿️.</p>
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
            <p className="text-center font-semibold mt-2">
              Her ser man veien frem mot Høyseth, med Gimsdalstinden fremst,
              Hammarsettindene lenger bak og Borgundkollen til venstre.
            </p>
          </div>
        </section>
          
          
        <p className="text-center mb-2 mt-6">
          Videre fra parkeringa følger man veien til Høyseth, for så å gå opp
          til Gimsdalen.
        </p>

        <p className="text-center mb-3">
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
        
        </section>
      )}
       
   
    {valgt.includes("blindheimsbakkane") && (
        <section className="mt-10">
          <h2 className="text-center text-xl font-bold">Fra Blindheimsbakkane</h2>
                     
                     <div className="flex items-center justify-center ">
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
            Man kan også gå opp fra andre siden av Vik elven på Blindheimsbakkane,
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
            <p className="text-center mt-2 font-bold">
              Her er grusveien hvor man kjører frem til parkeringen, NB: Bomvei
              70 kroner for å passere.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/veienvidere.gif"
              alt="Parkering Blindheimsbakkene"
              className=" w-full h-64 sm:h-96 object-cover"
            />
            <p className="text-center font-bold">
              Etter å ha fulgt veien et godt stykke innover, vil man komme til
              parkeringen som vist over🅿️
            </p>
          </div>
        </section>

        <p className="text-center mt-5">
          Etter man har parkert, er det bare å følge gruseveien som vist på
          bildet til høyre.
        </p>
        <p className="text-center mt-2">
          Videre langs denne grusveien, vil man komme til noen hytter. Her er
          det mulighet for å ta en snarvei.
        </p>

        <section className="grid grid-cols-2 gap-6 mt-2">
          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/snarvei.jpeg"
              alt="snarveien"
              className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
            />
            <p className="text-center mb-6 font-bold">Opp her går snarveien.</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/vei.jpeg"
              alt="vei med gimsdalstind i bakgrunn"
              className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
            />
            <p className="text-center font-bold">
              Hvis ikke er det bare å følge veien videre, med god utsikt til det
              endelige målet🚩.
            </p>
           </div>
             <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/oppmotbro.jpeg"
              alt="vei opp mot broen"
              className="w-full h-64 sm:h-96 object-cover shadow-md rounded-lg"
            />
            <p className="text-center mt-2 font-bold">
              Et lite stykke oppi her, vil råsene fra Vikedalen og
              Blindheimsbakkene flettes sammen🔀.
            </p>
            </div>

        </section>
        </section>
      )}
      </div>
    );
  }
  