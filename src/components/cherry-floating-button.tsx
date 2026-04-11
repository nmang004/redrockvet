"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CherryFloatingButton() {
  const pathname = usePathname();
  const [initialized, setInitialized] = useState(false);

  // Don't render on the payment plans page — it has its own Cherry widget
  const isPaymentPage = pathname === "/payment-plans";

  useEffect(() => {
    if (isPaymentPage || initialized) return;

    const w = window as any;

    w._hw = w._hw || function () {
      (w._hw.q = w._hw.q || []).push(arguments);
    };

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
        floatingEstimator: {
          position: "bottom-right",
          offset: { x: "0px", y: "0px" },
          zIndex: 9999,
          ctaFontFamily: "Montserrat",
          bodyFontFamily: "Montserrat",
          ctaColor: "#9e1d39",
          ctaTextColor: "#FFFFFF",
        },
      },
    }, ["floatingEstimator"]);

    const script = document.createElement("script");
    script.src = "https://files.withcherry.com/widgets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    setInitialized(true);
  }, [isPaymentPage, initialized]);

  if (isPaymentPage) return null;

  return <div id="floatingEstimator"></div>;
}
