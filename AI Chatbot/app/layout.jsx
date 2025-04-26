// app/layout.jsx
import ChatWidget from '@/components/ChatWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Your existing layout */}
        {children}
        
        {/* Add the chat widget */}
        <ChatWidget />
      </body>
    </html>
  );
}