import React from "react";
import Link from "next/link";
import WeatherCard from "@/components/weathercard";

export default function TurerPage() {
  return (
    <main className="p-8">
       <h1
          className="mb-8 mt-2 text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-md text-center"
          style={{
            backgroundImage:
              "linear-gradient(to top, #1e293b 0%, #6b7280 30%, #f8fafc 60%, #bae6fd 85%, #38bdf8 100%)",
          }}
        >
          Fjellturer
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="p-10 bg-[url('/Gimstdalstindvaer.jpeg')] bg-no-repeat bg-cover rounded-2xl shadow hover:shadow-lg transition">
          <div className="relative z-10 text-center">
            <Link
              href="/turer/gimsdalstind"
              className="text-xl text-center font-semibold text-gray-900 hover:underline"
            >
              Gimsdalstind
            </Link>
            <WeatherCard name="Gimsdalstind" lat={62.3416} lon={6.655} altitude={1007} />
          </div>
        </div>

        <div className="p-8 bg-[url('/urfjell.jpg')] bg-no-repeat bg-cover rounded-2xl shadow hover:shadow-lg transition">
          <div className="relative z-10 text-center">
            <Link
              href="/turer/urfjellet"
              className="text-xl text-center font-semibold text-gray-900 hover:underline"
            >
              Urfjellet
            </Link>
            <WeatherCard name="Urfjellet" lat={62.32524} lon={6.682276} altitude={1267} />
          </div>
        </div>

        <div className="p-4 bg-[url('/lafjell2.jpg')] bg-no-repeat bg-cover rounded-2xl shadow hover:shadow-lg transition">
          <div className="relative z-10 text-center">
            <Link
              href="/turer/lafjellet"
              className="text-xl text-center font-semibold text-gray-900 hover:underline"
            >
              Lafjellet
            </Link>
            <WeatherCard name="Lafjellet" lat={62.327563} lon={6.712384} altitude={1161} />
          </div>
        </div>

        <div className="p-10 bg-[url('/holetind.jpg')] bg-bottom bg-no-repeat bg-cover rounded-2xl shadow hover:shadow-lg transition">
          <div className=" rounded-2xl"></div>

          <div className="relative z-10 text-center">
            <Link
              href="/turer/holetindene"
              className="text-xl text-center font-semibold text-gray-900 hover:underline"
            >
              Holetindene
            </Link>
            <WeatherCard name="Holetindene" lat={62.32524} lon={6.682276} altitude={1242} />
          </div>
        </div>
      </div>
    </main>
  );
}
