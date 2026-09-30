function ListDocentes({
  docentes,
  setDocenteToEdit,
  setActiveScreen,
  handleDeleteDocente
}) {
  return (
    <div className="container">
      <h2>Lista de Docentes</h2>

      {docentes.length === 0 ? (
        <p>Nenhum docente cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Formação</th>
              <th>E-mail Institucional</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {docentes.map((docente) => (
              <tr key={docente.id}>
                <td>{docente.nome}</td>
                <td>{docente.formacao}</td>
                <td>{docente.emailInstitucional}</td>

                <td>
                  <button
                    onClick={() => {
                      setDocenteToEdit(docente);
                      setActiveScreen('cadastro');
                    }}
                  >
                    Alterar
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteDocente(docente.id)
                    }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListDocentes;