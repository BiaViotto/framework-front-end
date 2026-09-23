import ListaDeTarefas from "./components/ListaDeTarefas";

function App() {
  const tarefas = [
    "Estudar React",
    "Fazer a atividade",
    "Enviar o trabalho"
  ];

  return (
    <div>
      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;