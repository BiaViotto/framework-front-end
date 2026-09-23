import "../App.css";

function ListaDeTarefas({ tarefas }) {
  return (
    <div className="lista-tarefas">
      <h2>Lista de Tarefas</h2>

      {tarefas.length > 0 ? (
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa para exibir.</p>
      )}
    </div>
  );
}

export default ListaDeTarefas;