import React from "react";
import Link from "next/link";
import ImageCard from "@/components/imagecard";


export default function KontaktPage() {
  return (
    <div className="text-center flex-center mb-20">
      <h1
          className="mb-4 mt-4 text-5xl font-extrabold text-transparent bg-clip-text drop-shadow-md"
          style={{
            backgroundImage:
              "linear-gradient(to top, #1e293b 0%, #6b7280 30%, #f8fafc 60%, #bae6fd 85%, #38bdf8 100%)",
          }}
        >
          Kontakt
        </h1>
      <p className="text-xl mb-10">
        Har du spørsmål om turene eller formeninger om forklaringen? Ta kontakt
        med meg!
      </p>
      <ImageCard />
      </div>
   );
}


  
