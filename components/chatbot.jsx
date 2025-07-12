"use client";
import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const scriptId = "botpress-webchat-script";

    const initBotpress = () => {
      window.botpress.init({
        botId: "c94000dc-ce61-437d-ba04-ec53774c4108",
        clientId: "77907cf9-3686-4c7e-835a-e5cd6ccd4c27",
        selector: "#webchat",
        configuration: {
          version: "v1",
          botName: "Cnergy",
          botAvatar:
            "https://files.bpcontent.cloud/2025/07/09/09/20250709095022-P3F29LN7.png",
          fabImage:
            "https://files.bpcontent.cloud/2025/07/09/09/20250709095022-P3F29LN7.png",
          color: "#ab4aba",
          variant: "solid",
          headerVariant: "solid",
          themeMode: "light",
          fontFamily: "ibm",
          radius: 4,
          feedbackEnabled: false,
          footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
          storageLocation: "localStorage",
        },
      });

      window.botpress.on("webchat:ready", () => {
        window.botpress.open();
      });
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
      script.async = true;

      script.onload = () => {
        if (window.botpress?.init && window.botpress?.on) {
          initBotpress();
        }
      };

      document.body.appendChild(script);
    } else {
      // Wait for botpress to be ready before initializing
      const checkReady = () => {
        if (window.botpress?.init && window.botpress?.on) {
          initBotpress();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    }
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
