import { useState, useEffect } from "react";
import "./App.css";

function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setVisivel(false);
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, []);

  return (
    <div className="container">
      {visivel && <h1>Bem-vindo!</h1>}
    </div>
  );
}

export default AvisoTemporizado;