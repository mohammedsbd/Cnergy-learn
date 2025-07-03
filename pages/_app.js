import '@/styles/globals.css';
import React from 'react';
import Chatbot from '../components/chatbot';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Chatbot />
    </>
  );
}

export default MyApp;
