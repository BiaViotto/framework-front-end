function EquipamentoCard({ equipamento }) {
  return (
    <div className="card">

      <img
        src={equipamento.imagem}
        alt={equipamento.produto}
        className="card-imagem"
      />

      <div className="card-conteudo">

        <h2>{equipamento.produto}</h2>

        <span
          className={
            equipamento.status === "Alerta"
              ? "status alerta"
              : equipamento.status === "Em manutenção"
              ? "status manutencao"
              : "status"
          }
        >
          {equipamento.status}
        </span>

        <p>
          <strong>Função:</strong> {equipamento.funcao}
        </p>

      </div>

    </div>
  );
}

export default EquipamentoCard;