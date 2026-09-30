import React, { useState } from 'react'

function FormChamado({ onCadastrar, enviando }) {
  const [solicitante, setSolicitante] = useState('')
  const [setor, setSetor] = useState('')
  const [tipo, setTipo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setErro('')

    const nomeLimpo = solicitante.trim()
    const descricaoLimpa = descricao.trim()

    if (nomeLimpo.length < 3) {
      setErro('O nome do solicitante deve ter pelo menos 3 caracteres.')
      return
    }

    if (!setor) {
      setErro('Selecione um setor.')
      return
    }

    if (!tipo) {
      setErro('Selecione o tipo de problema.')
      return
    }

    if (descricaoLimpa.length < 10) {
      setErro('A descrição do problema deve ter pelo menos 10 caracteres.')
      return
    }

    if (!prioridade) {
      setErro('Selecione a prioridade.')
      return
    }

    try {
      await onCadastrar({
        solicitante: nomeLimpo,
        setor,
        tipo,
        descricao: descricaoLimpa,
        prioridade
      })

      setSolicitante('')
      setSetor('')
      setTipo('')
      setDescricao('')
      setPrioridade('')
    } catch (error) {
      setErro(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="solicitante">Nome do Solicitante</label>

        <input
          id="solicitante"
          type="text"
          value={solicitante}
          onChange={(event) => setSolicitante(event.target.value)}
          placeholder="Digite seu nome"
          minLength="3"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="setor">Setor</label>

        <select
          id="setor"
          value={setor}
          onChange={(event) => setSetor(event.target.value)}
          required
        >
          <option value="">Selecione o setor</option>
          <option value="TI">TI</option>
          <option value="RH">RH</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Operações">Operações</option>
          <option value="Comercial">Comercial</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tipo">Tipo de Problema</label>

        <select
          id="tipo"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
          required
        >
          <option value="">Selecione o tipo</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Rede">Rede</option>
          <option value="Acesso">Acesso</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição do Problema</label>

        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Descreva o problema"
          minLength="10"
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prioridade">Prioridade</label>

        <select
          id="prioridade"
          value={prioridade}
          onChange={(event) => setPrioridade(event.target.value)}
          required
        >
          <option value="">Selecione a prioridade</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      {erro && <p className="error-message">{erro}</p>}

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Abrir Chamado'}
      </button>
    </form>
  )
}

export default FormChamado