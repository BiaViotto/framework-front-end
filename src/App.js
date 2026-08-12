import EquipamentoCard from "./components/EquipamentoCard";
import equipamentos from "./data/equipamentos";
import "./styles/visual.css";

function App() {
  return (
    <div className="app">

      <header className="cabecalho">
        <h1>Painel de Equipamentos Inteligentes</h1>

        <p>
          Monitoramento dos equipamentos da fábrica
        </p>
      </header>

      <main className="container">

        <section className="introducao">
          <h2>Equipamentos da Indústria 4.0</h2>

          <p>
            Acompanhe os equipamentos inteligentes presentes
            no chão de fábrica, seus respectivos status e funções.
          </p>
        </section>

        <section className="painel">

          {equipamentos.map((equipamento) => (
            <EquipamentoCard
              key={equipamento.id}
              equipamento={equipamento}
            />
          ))}

        </section>

      </main>

      <footer className="rodape">
        <p>
          Painel de Equipamentos • Indústria 4.0
        </p>
      </footer>

    </div>
  );
}

export default App;