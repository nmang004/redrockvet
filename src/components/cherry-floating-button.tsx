"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function CherryFloatingButton() {
  const pathname = usePathname();
  const isPaymentPage = pathname === "/payment-plans";

  return (
    <div style={isPaymentPage ? { display: "none" } : undefined}>
      <Script id="cherry-float-init" strategy="beforeInteractive">
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
              headerFontFamily: "Montserrat",
              floatingEstimator: {
                position: "bottom-right",
                offset: { x: "0px", y: "0px" },
                zIndex: 9999,
                ctaFontFamily: "Montserrat",
                bodyFontFamily: "Montserrat",
                ctaColor: "#9e1d39",
                ctaTextColor: "#FFFFFF"
              }
            }
          }, ["floatingEstimator"]);
        `}
      </Script>
      <Script
        src="https://files.withcherry.com/widgets/widget.js"
        strategy="afterInteractive"
      />
      <div id="floatingEstimator"></div>
    </div>
  );
}
