import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function validar() {
    const novosErros = {};

    if (nome.trim().length < 3) {
      novosErros.nome = "O nome deve ter no mínimo 3 letras.";
    }

    if (!email.includes("@")) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!curso) {
      novosErros.curso = "Escolha um curso.";
    }

    return novosErros;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviado(true);

    setNome("");
    setEmail("");
    setCurso("");
    setErros({});
  }

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Formulário de Matrícula</h1>

      <form className="row g-3" onSubmit={handleSubmit} noValidate>

        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>

          <input
            id="nome"
            type="text"
            className={`form-control ${
              erros.nome ? "is-invalid" : ""
            }`}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <div className="invalid-feedback">
            {erros.nome}
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            className={`form-control ${
              erros.email ? "is-invalid" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />

          <div className="invalid-feedback">
            {erros.email}
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="curso" className="form-label">
            Curso
          </label>

          <select
            id="curso"
            className={`form-select ${
              erros.curso ? "is-invalid" : ""
            }`}
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="ADS">ADS</option>
            <option value="MEI">MEI</option>
          </select>

          <div className="invalid-feedback">
            {erros.curso}
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary">
            Enviar
          </button>

          {enviado && (
            <span className="text-success ms-3">
              Matrícula enviada!
            </span>
          )}
        </div>

      </form>
    </div>
  );
}