import React from "react";
import Link from "next/link";
import ImageCard from "@/components/imagecard";

export default function KontaktPage() {
  return (
    <div className="text-center flex-center mb-40">
      <h1>Kontakt</h1>
      <p className="text-xl mb-30">
        Har du spørsmål om turene eller formeninger om forklaringen? Ta kontakt
        med meg!
      </p>
      <ImageCard />
    </div>
   );
}


  
