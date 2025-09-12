"use client";

import { useEffect } from "react";

export default function CoffeeWidget() {
  useEffect(() => {
    // Sjekk om scriptet allerede finnes
    if (document.getElementById("bmc-script")) return;

    const script = document.createElement("script");
    script.id = "bmc-script";
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "Reketino");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "Takk for besøket, kjøp meg en Kaffi!");
    script.setAttribute("data-color", "#BD5FFF");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}


        