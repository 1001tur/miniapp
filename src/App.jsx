import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Привет из Mini App!</h1>
      <p>Это базовое приложение для Telegram.</p>
    </div>
  );
}

export default App;