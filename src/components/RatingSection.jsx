"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Rating from "@/components/Rating";

export default function RatingSection({ page }) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [avgRating, setAvgRating] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .select("rating", { count: "exact" })
      .eq("page", page);

    if (error) {
      console.error("Feil ved henting av rating:", error.message);
      return;
    }

    if (data.length > 0) {
      const sum = data.reduce((acc, r) => acc + r.rating, 0);
      setAvgRating((sum / data.length).toFixed(1));
      setCount(data.length);
    } else {
      setAvgRating(0);
      setCount(0);
    }
  };

  const handleSubmit = async () => {
    if (!rating) {
      setMessage("⚠️ Du må velge antall stjerner først!");
      return;
    }

    const { error } = await supabase.from("ratings").insert([
      {
        page,
        rating,
        description,
      },
    ]);

    if (error) {
      console.error("Supabase feil:", error);
      setMessage("❌ Kunne ikke lagre vurderingen.");
    } else {
      setMessage("✅ Takk for tilbakemeldingen!");
      setRating(0);
      setDescription("");
      fetchRatings();
    }
  };

   return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-blend-darken w-full sm:w-2/3 mx-auto text-center">
      <p className="text-lg font-semibold mb-4">Hvor godt likte du forklaringen?</p>

      <div className="flex flex-col items-center mb-4">
        <Rating max={5} value={rating} onChange={setRating} />
        {rating > 0 && (
          <span className="mt-2 font-bold text-lg">
            {rating} {rating === 1 ? "stjerne" : "stjerner"}
          </span>
        )}
      </div>

      <textarea
        className="w-full sm:w-3/4 md:w-1/2 p-2 border rounded-md text-center"
        placeholder="Skriv gjerne en kort kommentar..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Send inn
      </button>

      {message && <p className="mt-3 text-sm">{message}</p>}

      {count > 0 && (
        <p className="mt-4 text-gray-700">
          🌟 Gjennomsnitt: {avgRating} ({count} {count === 1 ? "stemme" : "stemmer"})
        </p>
      )}
    </div>
  );
}