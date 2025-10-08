import React from "react";
import Link from "next/link";
import ImageCard from "@/components/imagecard";


export default function KontaktPage() {
  return (
    <div className="text-center flex-center mb-20">
      <h1 className="font-extrabold text-4xl mb-5 mt-5">
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


  
