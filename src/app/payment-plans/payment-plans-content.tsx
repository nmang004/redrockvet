"use client";

import Script from "next/script";

export default function PaymentPlansContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cherry Widget - queue stub must be created before script loads */}
      <Script id="cherry-page-init" strategy="beforeInteractive">
        {`
          window._hw = window._hw || function() {
            (window._hw.q = window._hw.q || []).push(arguments);
          };
          _hw("init", {
            debug: false,
            variables: {
              slug: "red-rock-veterinary-health",
              name: "Red Rock Veterinary Health",
              images: [70],
              customLogo: "",
              defaultPurchaseAmount: 750,
              customImage: "",
              imageCategory: "veterinary",
              language: "en"
            },
            styles: {
              primaryColor: "#9e1d39",
              secondaryColor: "#9e1d3910",
              fontFamily: "Montserrat",
              headerFontFamily: "Montserrat"
            }
          }, ["hero", "calculator", "howitworks", "faq"]);
        `}
      </Script>
      <Script
        src="https://files.withcherry.com/widgets/widget.js"
        strategy="afterInteractive"
      />

      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </div>
  );
}
