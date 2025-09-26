import React, { useState } from "react";

export default function LafjelletInfo() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="px-4 py-2 bg-cyan-950 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showInfo ? "Skjul teknisk info" : "Vis teknisk info"}
      </button>
      {showInfo && (
        <div className="mt-4 p-4 bg-black rounded-lg shadow text-white">
          <p>
            <span className="font-semibold mt-2 mb-2">
              Rangering:<p className="text-red-500">RØD</p>
            </span>

            <p>
              <span className="font-semibold mt-2 mb-2">
                Høydemeter: 1161 m
              </span>
            </p>

            <p>
              <span className="font-semibold mt-2 mb-2">
                Vertikal Stigning: 856 m
              </span>
            </p>

            <p>
              <span className="font-semibold mt-2 mb-2">Kilometer: 6.62</span>
            </p>
            <p>
              <span className="font-semibold mt-2 mb-2">
                Tidsbruk: 2-3 timer
              </span>
            </p>
          </p>
        </div>
      )}
    </div>
  );
}
