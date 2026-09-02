import { useState, useEffect } from "react";
import "./App.css";

function ContadorCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      alert("Curtidas em alta!");
    }
  }, [curtidas]);

  return (
    <div className="container">
      <h1>Contador de Curtidas</h1>
      <p>Curtidas: {curtidas}</p>

      <button onClick={() => setCurtidas(curtidas + 1)}>
        Curtir
      </button>
    </div>
  );
}

export default ContadorCurtidas;