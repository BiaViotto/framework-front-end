import { useEffect, useState } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div className="relogio">
      <h1>Relógio Digital</h1>
      <h2>{hora.toLocaleTimeString("pt-BR")}</h2>
    </div>
  );
}

export default Relogio;