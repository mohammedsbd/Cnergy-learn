import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const scriptId = 'botpress-webchat-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
      script.async = true;
      script.onload = () => {
        window.botpress && window.botpress.init && window.botpress.init({
          botId: 'c94000dc-ce61-437d-ba04-ec53774c4108',
          clientId: '77907cf9-3686-4c7e-835a-e5cd6ccd4c27',
          selector: '#webchat',
          configuration: {
            version: 'v1',
            botName: 'Luma',
            botAvatar: 'https://files.bpcontent.cloud/2025/07/01/12/20250701121214-12DIGWDN.png',
            color: '#e6b7a9',
            variant: 'solid',
            headerVariant: 'solid',
            themeMode: 'light',
            fontFamily: 'ibm',
            radius: 4,
            feedbackEnabled: false,
            footer: '[⚡ by Botpress](https://botpress.com/?from=webchat)',
            storageLocation: 'localStorage',
          },
        });
        window.botpress.on && window.botpress.on('webchat:ready', () => {
          window.botpress.open();
        });
      };
      document.body.appendChild(script);
    } else {
      window.botpress && window.botpress.init && window.botpress.init({
        botId: 'c94000dc-ce61-437d-ba04-ec53774c4108',
        clientId: '77907cf9-3686-4c7e-835a-e5cd6ccd4c27',
        selector: '#webchat',
        configuration: {
          version: 'v1',
          botName: 'Luma',
          botAvatar: 'https://files.bpcontent.cloud/2025/07/01/12/20250701121214-12DIGWDN.png',
          color: '#e6b7a9',
          variant: 'solid',
          headerVariant: 'solid',
          themeMode: 'light',
          fontFamily: 'ibm',
          radius: 4,
          feedbackEnabled: false,
          footer: '[⚡ by Botpress](https://botpress.com/?from=webchat)',
          storageLocation: 'localStorage',
        },
      });
      window.botpress.on && window.botpress.on('webchat:ready', () => {
        window.botpress.open();
      });
    }
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
