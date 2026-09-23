import { useState, useEffect } from "react";
import "./App.css";

function TituloDinamico() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    document.title = texto;
  }, [texto]);

  return (
    <div className="container">
      <h1>Título Dinâmico</h1>

      <input
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Digite um texto"
      />

      <p>Texto digitado: {texto}</p>
    </div>
  );
}

export default TituloDinamico;