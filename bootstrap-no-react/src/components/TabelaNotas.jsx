import { useState } from "react";

export default function TabelaNotas() {
  const [busca, setBusca] = useState("");

  const alunos = [
    { id: 1, nome: "Ana", curso: "ADS", nota: 8.5 },
    { id: 2, nome: "Bruno", curso: "ADS", nota: 7.0 },
    { id: 3, nome: "Carla", curso: "MEI", nota: 5.5 },
    { id: 4, nome: "Daniel", curso: "ADS", nota: 9.0 },
    { id: 5, nome: "Eduarda", curso: "MEI", nota: 4.5 },
    { id: 6, nome: "Felipe", curso: "ADS", nota: 6.5 },
    { id: 7, nome: "Gabriela", curso: "MEI", nota: 5.0 },
    { id: 8, nome: "Henrique", curso: "ADS", nota: 8.0 }
  ];

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Tabela de Notas</h1>

      <div className="mb-4">
        <label htmlFor="busca" className="form-label">
          Buscar aluno
        </label>

        <input
          id="busca"
          type="text"
          className="form-control"
          placeholder="Digite o nome do aluno"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Aluno</th>
              <th>Curso</th>
              <th>Nota</th>
              <th>Situação</th>
            </tr>
          </thead>

          <tbody>
            {alunosFiltrados.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.nota}</td>
                <td>
                  {aluno.nota < 6 ? (
                    <span className="badge text-bg-danger">
                      Abaixo da média
                    </span>
                  ) : (
                    <span className="badge text-bg-success">
                      Aprovado
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {alunosFiltrados.length === 0 && (
          <p className="text-muted">
            Nenhum aluno encontrado.
          </p>
        )}
      </div>
    </div>
  );
}