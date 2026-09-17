import { useState } from "react";
import BotaoCurso from "./BotaoCurso";

export default function Catalogo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const cursos = [
    {
      id: 1,
      nome: "Análise e Desenvolvimento de Sistemas",
      descricao: "Aprenda a desenvolver sistemas e aplicações."
    },
    {
      id: 2,
      nome: "Desenvolvimento Web",
      descricao: "Crie sites e aplicações modernas."
    },
    {
      id: 3,
      nome: "Banco de Dados",
      descricao: "Aprenda a organizar e gerenciar dados."
    },
    {
      id: 4,
      nome: "Programação",
      descricao: "Desenvolva sua lógica de programação."
    }
  ];

  const alunos = [
    { id: 1, nome: "Ana", curso: "ADS", nota: 8.5 },
    { id: 2, nome: "Bruno", curso: "ADS", nota: 7.0 },
    { id: 3, nome: "Carla", curso: "MEI", nota: 5.5 },
    { id: 4, nome: "Daniel", curso: "ADS", nota: 9.0 }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (nome.trim().length < 3) {
      setErro("O nome deve ter no mínimo 3 letras.");
      return;
    }

    if (!email.includes("@")) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (!curso) {
      setErro("Escolha um curso.");
      return;
    }

    setErro("");
    setEnviado(true);

    setNome("");
    setEmail("");
    setCurso("");
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Catálogo do Curso</span>

          <div className="navbar-nav flex-row gap-3">
            <a className="nav-link" href="#cursos">
              Cursos
            </a>

            <a className="nav-link" href="#alunos">
              Inscritos
            </a>

            <a className="nav-link" href="#formulario">
              Inscrição
            </a>
          </div>
        </div>
      </nav>

      <main className="container py-5">

        {/* Cursos */}
        <section id="cursos" className="mb-5">
          <h1 className="h3 mb-4">Cursos disponíveis</h1>

          <div className="row g-4">
            {cursos.map((curso) => (
              <div className="col-12 col-md-6" key={curso.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{curso.nome}</h5>

                    <p className="card-text">
                      {curso.descricao}
                    </p>

                    <BotaoCurso />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alunos */}
        <section id="alunos" className="mb-5">
          <h2 className="h4 mb-4">Alunos inscritos</h2>

          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Aluno</th>
                  <th>Curso</th>
                  <th>Nota</th>
                </tr>
              </thead>

              <tbody>
                {alunos.map((aluno) => (
                  <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>

                    <td>
                      {aluno.nota < 6 ? (
                        <span className="badge text-bg-danger">
                          {aluno.nota}
                        </span>
                      ) : (
                        aluno.nota
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Formulário */}
        <section id="formulario">
          <h2 className="h4 mb-4">Formulário de inscrição</h2>

          <form
            className="row g-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>

              <input
                id="nome"
                type="text"
                className={`form-control ${
                  erro && nome.trim().length < 3
                    ? "is-invalid"
                    : ""
                }`}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                className={`form-control ${
                  erro && !email.includes("@")
                    ? "is-invalid"
                    : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="curso" className="form-label">
                Curso
              </label>

              <select
                id="curso"
                className={`form-select ${
                  erro && !curso ? "is-invalid" : ""
                }`}
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="ADS">ADS</option>
                <option value="MEI">MEI</option>
              </select>
            </div>

            {erro && (
              <div className="col-12">
                <div className="alert alert-danger">
                  {erro}
                </div>
              </div>
            )}

            {enviado && (
              <div className="col-12">
                <div className="alert alert-success">
                  Inscrição enviada com sucesso!
                </div>
              </div>
            )}

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Enviar inscrição
              </button>
            </div>
          </form>
        </section>

      </main>
    </>
  );
}