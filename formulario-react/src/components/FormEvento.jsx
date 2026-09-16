import { useState } from "react";

function FormEvento() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoParticipante, setTipoParticipante] = useState("estudante");
  const [turno, setTurno] = useState("manha");
  const [oficinas, setOficinas] = useState([]);
  const [aceiteRegulamento, setAceiteRegulamento] = useState(false);

  // Controla as oficinas selecionadas
  const handleOficina = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setOficinas([...oficinas, value]);
    } else {
      setOficinas(oficinas.filter((oficina) => oficina !== value));
    }
  };

  // Envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Tipo de participante:", tipoParticipante);
    console.log("Turno:", turno);
    console.log("Oficinas:", oficinas);
    console.log("Aceitou o regulamento:", aceiteRegulamento);

    // Limpa o formulário
    setNome("");
    setEmail("");
    setTipoParticipante("estudante");
    setTurno("manha");
    setOficinas([]);
    setAceiteRegulamento(false);
  };

  return (
    <div className="formulario">
      <h1>Inscrição no Evento</h1>

      <form onSubmit={handleSubmit}>

        {/* Nome */}
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        {/* E-mail */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        {/* Tipo de participante */}
        <p>
          <strong>Tipo de participante:</strong>
        </p>

        <div className="radio-grupo">
          <label>
            <input
              type="radio"
              name="tipoParticipante"
              value="estudante"
              checked={tipoParticipante === "estudante"}
              onChange={(e) => setTipoParticipante(e.target.value)}
            />
            Estudante
          </label>

          <label>
            <input
              type="radio"
              name="tipoParticipante"
              value="profissional"
              checked={tipoParticipante === "profissional"}
              onChange={(e) => setTipoParticipante(e.target.value)}
            />
            Profissional
          </label>
        </div>

        {/* Turno */}
        <label>
          <span>Turno preferido:</span>

          <select
            name="turno"
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
          >
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </label>

        {/* Oficinas */}
        <p>
          <strong>Oficinas de interesse:</strong>
        </p>

        <div className="checkbox-grupo">
          <label className="checkbox">
            <input
              type="checkbox"
              name="oficinas"
              value="frontend"
              checked={oficinas.includes("frontend")}
              onChange={handleOficina}
            />
            Front-end
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="oficinas"
              value="backend"
              checked={oficinas.includes("backend")}
              onChange={handleOficina}
            />
            Back-end
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="oficinas"
              value="dados"
              checked={oficinas.includes("dados")}
              onChange={handleOficina}
            />
            Dados
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="oficinas"
              value="ia"
              checked={oficinas.includes("ia")}
              onChange={handleOficina}
            />
            Inteligência Artificial
          </label>
        </div>

        {/* Aceite do regulamento */}
        <label className="checkbox">
          <input
            type="checkbox"
            name="aceiteRegulamento"
            checked={aceiteRegulamento}
            onChange={(e) => setAceiteRegulamento(e.target.checked)}
          />
          Aceito o regulamento do evento
        </label>

        {/* Botão */}
        <input
          type="submit"
          value="Enviar inscrição"
          disabled={!aceiteRegulamento}
        />

      </form>
    </div>
  );
}

export default FormEvento;