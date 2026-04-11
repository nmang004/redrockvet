"use client";

import Script from "next/script";

export default function PaymentPlansContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cherry Widget */}
      <Script
        src="https://files.withcherry.com/widgets/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any)._hw) {
            (window as any)._hw("init", {
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
          }
        }}
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
