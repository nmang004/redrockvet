"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function CherryFloatingButton() {
  const pathname = usePathname();

  // Don't render on the payment plans page — it has its own Cherry widget
  if (pathname === "/payment-plans") return null;

  return (
    <>
      <Script id="cherry-float-init" strategy="afterInteractive">
        {`
          (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () {
              (w[o].q = w[o].q || []).push(arguments);
            };
            (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
          })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
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
      <div id="floatingEstimator"></div>
    </>
  );
}
