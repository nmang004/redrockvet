"use client";

import Script from "next/script";

export default function PaymentPlansContent() {
  return (
    <div className="min-h-screen">
      <Script id="cherry-page-init" strategy="afterInteractive">
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
              headerFontFamily: "Montserrat"
            }
          }, ["hero", "calculator", "howitworks", "faq"]);
        `}
      </Script>

      <div id="all"></div>
      <div id="hero"></div>
      <div id="calculator"></div>
      <div id="howitworks"></div>
      <div id="testimony"></div>
      <div id="faq"></div>
    </div>
  );
}
