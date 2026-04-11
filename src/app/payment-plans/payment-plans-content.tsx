"use client";

import { useEffect } from "react";

export default function PaymentPlansContent() {
  useEffect(() => {
    const w = window as any;

    // Set up _hw queue stub
    w._hw = w._hw || function () {
      (w._hw.q = w._hw.q || []).push(arguments);
    };

    // Queue the init call
    w._hw("init", {
      debug: false,
      variables: {
        slug: "red-rock-veterinary-health",
        name: "Red Rock Veterinary Health",
        images: [70],
        customLogo: "",
        defaultPurchaseAmount: 750,
        customImage: "",
        imageCategory: "veterinary",
        language: "en",
      },
      styles: {
        primaryColor: "#9e1d39",
        secondaryColor: "#9e1d3910",
        fontFamily: "Montserrat",
        headerFontFamily: "Montserrat",
      },
    }, ["hero", "calculator", "howitworks", "faq"]);

    // Load Cherry widget script
    const script = document.createElement("script");
    script.src = "https://files.withcherry.com/widgets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </div>
  );
}
