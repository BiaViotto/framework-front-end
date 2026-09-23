export default function TabelaManutencoes({ manutencoes }) {
  return (
    <div className="table-responsive">

      <table className="table table-striped align-middle">

        <thead className="table-dark">
          <tr>
            <th>Equipamento</th>
            <th>Tipo</th>
            <th>Responsável</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          {manutencoes.map((manutencao, index) => (
            <tr key={index}>

              <td>
                {manutencao.equipamento}
              </td>

              <td>
                <span
                  className={`badge ${
                    manutencao.tipo === "Preventiva"
                      ? "text-bg-success"
                      : manutencao.tipo === "Corretiva"
                      ? "text-bg-danger"
                      : "text-bg-primary"
                  }`}
                >
                  {manutencao.tipo}
                </span>
              </td>

              <td>
                {manutencao.responsavel}
              </td>

              <td>
                {manutencao.descricao}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {manutencoes.length === 0 && (
        <p className="text-muted">
          Nenhuma manutenção registrada.
        </p>
      )}

    </div>
  );
}