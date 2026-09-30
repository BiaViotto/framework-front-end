import React from 'react'

function ListaChamados({ chamados, loading }) {
  if (loading) {
    return <p className="loading">Carregando chamados...</p>
  }

  if (chamados.length === 0) {
    return <p>Nenhum chamado aberto.</p>
  }

  return (
    <div>
      <h1>Chamados Abertos</h1>

      <div className="lista-chamados">
        {chamados.map((chamado) => (
          <div className="chamado" key={chamado.id}>
            <h3>
              #{chamado.id} - {chamado.solicitante}
            </h3>

            <p>
              <strong>Setor:</strong> {chamado.setor}
            </p>

            <p>
              <strong>Tipo:</strong> {chamado.tipo}
            </p>

            <p>
              <strong>Descrição:</strong> {chamado.descricao}
            </p>

            <p>
              <strong>Prioridade:</strong> {chamado.prioridade}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaChamados