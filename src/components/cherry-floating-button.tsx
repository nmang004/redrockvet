"use client";

import Script from "next/script";

export default function CherryFloatingButton() {
  return (
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
              floatingEstimator: {
                position: "bottom-right",
                offset: {
                  x: "0px",
                  y: "0px",
                },
                zIndex: 9999,
                ctaFontFamily: "Montserrat",
                bodyFontFamily: "Montserrat",
                ctaColor: "#9e1d39",
                ctaTextColor: "#FFFFFF",
              },
            },
          }, ["floatingEstimator"]);
        }
      }}
    />
  );
}
