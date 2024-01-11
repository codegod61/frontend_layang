import React, { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "22db7b3a-aa91-444a-940f-d04acb08e3db",
        region: "us-south",
        serviceInstanceID: "61dc1dfb-facc-4f97-b5a7-60351d14b89d",
        onLoad: async (instance) => {
          await instance.render();
        },
      };

      setTimeout(() => {
        const script = document.createElement("script");
        script.src =
          "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
          (window.watsonAssistantChatOptions.clientVersion || "latest") +
          "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);
      });
    }

    return () => {
      const script = document.querySelector(
        'script[src^="https://web-chat.global.assistant.watson.appdomain.cloud/"]'
      );
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default ChatComponent;
