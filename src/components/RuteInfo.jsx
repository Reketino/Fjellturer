"use client"

import React, { useState } from "react";

export default function RuteInfo({
  rangering,
  rangeringFarge = "text-red-500", 
  hoydemeter,
  vertikalStigning,
  kilometer,
  tidsbruk,
}) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="px-4 py-2 bg-cyan-950 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showInfo ? "Skjul teknisk info" : "Vis teknisk info"}
      </button>

      {showInfo && (
        <div className="mt-4 p-4 bg-black rounded-lg shadow text-white space-y-2">
          <p>
            <span className="font-semibold">Rangering:</span>{" "}
            <span className={rangeringFarge}>{rangering}</span>
          </p>
          <p>
            <span className="font-semibold">Høydemeter:</span> {hoydemeter} m
          </p>
          <p>
            <span className="font-semibold">Vertikal stigning:</span>{" "}
            {vertikalStigning} m
          </p>
          <p>
            <span className="font-semibold">Kilometer:</span> {kilometer}
          </p>
          <p>
            <span className="font-semibold">Tidsbruk:</span> {tidsbruk}
          </p>
        </div>
      )}
    </div>
  );
}