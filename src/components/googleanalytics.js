// src/components/GoogleAnalytics.js
import { useEffect } from "react";

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    // Avoid duplicate script
    if (window.gtag || document.getElementById("ga-script")) return;

    // Load the GA script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-L11CDKTS4E`;
    script.id = "ga-script";
    document.head.appendChild(script);

    // Initialize GA after script loads
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", trackingId);
    };
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;