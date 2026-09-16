import { useState } from "react";
import NavBar from "./components/NavBar";
import FormManutencao from "./components/FormManutencao";
import TabelaManutencoes from "./components/TabelaManutencoes";
import "./App.css";

export default function App() {
  const [manutencoes, setManutencoes] = useState([]);
  const [abaAtiva, setAbaAtiva] = useState("cadastro");

  function adicionarManutencao(manutencao) {
    setManutencoes((lista) => [
      ...lista,
      manutencao
    ]);
  }

  return (
    <div className="container py-4">

      <NavBar
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
      />

      {abaAtiva === "cadastro" && (
        <>
          <h1 className="h3 mb-4">
            Registro de Manutenção
          </h1>

          <FormManutencao
            onEnviar={adicionarManutencao}
          />

          <hr className="my-5" />

          <h2 className="h4 mb-3">
            Manutenções registradas
          </h2>

          <TabelaManutencoes
            manutencoes={manutencoes}
          />
        </>
      )}

      {abaAtiva === "historico" && (
        <>
          <h1 className="h3 mb-4">
            Histórico ({manutencoes.length})
          </h1>

          <TabelaManutencoes
            manutencoes={manutencoes}
          />
        </>
      )}

    </div>
  );
}