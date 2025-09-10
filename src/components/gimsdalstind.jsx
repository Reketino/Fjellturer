"use client";

import { useEffect, useState } from "react";
import emojiMap from "@/utils/emojiMap"; 

export default function Gimsdalstind() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=62.3416&lon=6.655&altitude=90",
          {
            headers: {
              "User-Agent": "fjellturer-app/1.0 (bjornevensk8@gmail.com)",
            },
          }
        );
        const data = await res.json();
        const first = data.properties.timeseries[0];
        const symbol = first.data.next_1_hours?.summary?.symbol_code ?? "cloudy";

        setWeather({
          temp: first.data.instant.details.air_temperature,
          wind: first.data.instant.details.wind_speed,
          symbol,
        });
      } catch (err) {
        console.error("Feil ved henting av værdata:", err);
      }
    }

    fetchWeather();
  }, []);

  if (!weather) return <p>Laster værdata...</p>;
  
  const symbolKey = weather.symbol;
  const symbolData = emojiMap[symbolKey] ?? { text: weather.symbol, emoji: "❔" };

  return (
    <div className="flex flex-col items-center mt-8 space-y-4 text-center">
      <h1 className="text-2xl font-bold">Gimsdalstind ⛰️</h1>
      <p>🌡️ Temperatur: {weather.temp} °C</p>
      <p>💨 Vind: {weather.wind} m/s</p>


      <div className="text-6xl">{symbolData.emoji}</div>
      <p className="text-lg font-medium">{symbolData.text}</p>
    </div>
  );
}