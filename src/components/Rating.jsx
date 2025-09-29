"use client";

import { useState } from "react";

export default function Rating({ max = 5, value, onChange }) {
  const [internalRating, setInternalRating] = useState(0);
  const [hover, setHover] = useState(0);
  const rating = value !== undefined ? value : internalRating;
  const setRating = onChange || setInternalRating;

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        return (
          <button
            key={i}
            type="button"
            className={`text-3xl ${
              starValue <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-300"
            } transition-colors`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            ⭐
          </button>
        );
      })}
    </div>
  );
}
