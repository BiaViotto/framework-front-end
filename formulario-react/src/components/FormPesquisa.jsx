import { useState } from "react";

function FormPesquisa() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [satisfacao, setSatisfacao] = useState("neutro");
  const [comentario, setComentario] = useState("");
  const [aceiteTermos, setAceiteTermos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Satisfação:", satisfacao);
    console.log("Comentário:", comentario);
    console.log("Aceitou os termos:", aceiteTermos);

    setNome("");
    setEmail("");
    setSatisfacao("neutro");
    setComentario("");
    setAceiteTermos(false);
  };

  return (
    <div className="formulario">
      <h1>Pesquisa de Satisfação</h1>

      <form onSubmit={handleSubmit}>
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

        <p><strong>Nível de satisfação:</strong></p>

        <div className="radio-grupo">
          <label>
            <input
              type="radio"
              name="satisfacao"
              value="insatisfeito"
              checked={satisfacao === "insatisfeito"}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Insatisfeito
          </label>

          <label>
            <input
              type="radio"
              name="satisfacao"
              value="neutro"
              checked={satisfacao === "neutro"}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Neutro
          </label>

          <label>
            <input
              type="radio"
              name="satisfacao"
              value="satisfeito"
              checked={satisfacao === "satisfeito"}
              onChange={(e) => setSatisfacao(e.target.value)}
            />
            Satisfeito
          </label>
        </div>

        <label>
          <span>Comentário:</span>
          <textarea
            name="comentario"
            placeholder="Digite seu comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="aceiteTermos"
            checked={aceiteTermos}
            onChange={(e) => setAceiteTermos(e.target.checked)}
          />
          Aceito os termos de privacidade
        </label>

        <input
          type="submit"
          value="Enviar"
          disabled={!aceiteTermos}
        />
      </form>
    </div>
  );
}

export default FormPesquisa;