"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Rating from "@/components/Rating";
import Værdata from "@/components/Værdata";

export default function HoletindenPage() {
  const [rating, setRating] = useState(0);

  return (
    <div className="text-center flex-center">
      <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
        <h1>Holetindene</h1>
        <p>
          Holetindene finner du i Velledalen, som er en 10 minutters kjøretur
          fra sentrum av Sykkylven.
        </p>

        <div className="p-8">
          <p>Hvor godt likte du forklaringen?</p>
          <Rating max={5} value={rating} onChange={setRating} />
          <p className="mt-2"> du ga {rating} stjerner</p>
        </div>

        <Værdata
          title="Holetindene"
          lat={62.282961}
          lon={6.724356}
          altitude={1242}
        />
      </main>
    </div>
  );
}
