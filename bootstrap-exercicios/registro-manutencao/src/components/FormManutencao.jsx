import { useState } from "react";

export default function FormManutencao({ onEnviar }) {
  const [equipamento, setEquipamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (equipamento.trim().length < 3) {
      novosErros.equipamento =
        "O equipamento deve ter no mínimo 3 caracteres.";
    }

    if (!tipo) {
      novosErros.tipo =
        "Escolha o tipo de manutenção.";
    }

    if (responsavel.trim().length < 3) {
      novosErros.responsavel =
        "O responsável deve ter no mínimo 3 caracteres.";
    }

    if (descricao.trim().length < 10) {
      novosErros.descricao =
        "A descrição deve ter no mínimo 10 caracteres.";
    }

    return novosErros;
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    onEnviar({
      equipamento,
      tipo,
      responsavel,
      descricao
    });

    setEquipamento("");
    setTipo("");
    setResponsavel("");
    setDescricao("");
    setErros({});
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>

      <div className="col-md-6">
        <label htmlFor="equipamento" className="form-label">
          Equipamento
        </label>

        <input
          type="text"
          id="equipamento"
          className={`form-control ${
            erros.equipamento ? "is-invalid" : ""
          }`}
          value={equipamento}
          onChange={(e) => setEquipamento(e.target.value)}
        />

        <div className="invalid-feedback">
          {erros.equipamento}
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="tipo" className="form-label">
          Tipo de manutenção
        </label>

        <select
          id="tipo"
          className={`form-select ${
            erros.tipo ? "is-invalid" : ""
          }`}
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Preventiva">Preventiva</option>
          <option value="Corretiva">Corretiva</option>
          <option value="Preditiva">Preditiva</option>
        </select>

        <div className="invalid-feedback">
          {erros.tipo}
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="responsavel" className="form-label">
          Responsável técnico
        </label>

        <input
          type="text"
          id="responsavel"
          className={`form-control ${
            erros.responsavel ? "is-invalid" : ""
          }`}
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
        />

        <div className="invalid-feedback">
          {erros.responsavel}
        </div>
      </div>

      <div className="col-12">
        <label htmlFor="descricao" className="form-label">
          Descrição do problema/serviço
        </label>

        <textarea
          id="descricao"
          className={`form-control ${
            erros.descricao ? "is-invalid" : ""
          }`}
          rows="4"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <div className="invalid-feedback">
          {erros.descricao}
        </div>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Registrar manutenção
        </button>
      </div>

    </form>
  );
}