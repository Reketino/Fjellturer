"use client";

import { use, useEffect, useState } from "react";
import emojiMap from "@/utils/emojiMap";

export default function WeatherCard({ name, lat, lon, altitude = 90}) {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
    async function fetchForecast() {
      try {
        const res = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}&altitude=${altitude}`,
          {
            headers: {
              "User-Agent": "fjellturer-app/1.0 (bjornevensk8@gmail.com)",
            },
          }
        );
      const data = await res.json();

      const dailyForecast = {};
      data.properties.timeseries.forEach((ts) => {
        const date = new Date(ts.time).toLocaleDateString("no-NO");
        if (!dailyForecast[date]) dailyForecast[date] = [];
        dailyForecast[date].push(ts);
      });
      const firstThreeDays = Object.entries(dailyForecast).slice(0, 3);
      setForecast(firstThreeDays);

    } catch (err) {
        console.error("Feil ved henting av værdata:", err);
      }
    }

    fetchForecast();
  }, [lat, lon, altitude]);

  if (!forecast) return <p>Laster værdata...</p>;

  return (
    <div>
      {forecast.map(([date, times]) => {

        const dayTime = times.find(ts => new Date(ts.time).getUTCHours() === 12);
        if (!dayTime) return null;

        const temp= dayTime.data.instant.details.air_temperature;
        const wind = dayTime.data.instant.details.wind_speed;
        const symbol = dayTime.data.next_1_hours?.summary?.symbol_code ?? "cloudy";
        const emojiData = emojiMap[symbol] ?? { text: symbol, emoji: "❔" };

      return (
        <div key={date} className="bg-black/30 p-4 rounded-lg text-center mb-4">
          <h2 className="text-xl font-bold text-white">{date}</h2>
          <p className="text-light text-lg font-medium drop-shadow-lg">🌡️ Temperatur: {temp} °C</p>
          <p className="text-light-grey text-lg font-medium drop-shadow-lg">💨 Vind: {wind} m/s</p>
          <div className="text-6xl">{emojiData.emoji}</div>
          <p className="text-white text-lg font-medium drop-shadow-lg">{emojiData.text}</p>
        </div>
      );
    })}
    </div>
  );
}

