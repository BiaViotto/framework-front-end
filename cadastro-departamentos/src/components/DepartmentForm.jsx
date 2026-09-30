import React, { useState } from 'react'

function DepartmentForm({ onCadastrar }) {
  const [nome, setNome] = useState('')
  const [sigla, setSigla] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setErro('')

    const siglaValida = /^[A-Za-z]{2,5}$/.test(sigla)

    if (!siglaValida) {
      setErro('A sigla deve ter entre 2 e 5 letras.')
      return
    }

    setEnviando(true)

    try {
      await onCadastrar({
        name: nome,
        acronym: sigla.toUpperCase()
      })

      setNome('')
      setSigla('')
    } catch (error) {
      setErro(error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome do departamento</label>

        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Ex.: Recursos Humanos"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sigla">Sigla</label>

        <input
          id="sigla"
          type="text"
          value={sigla}
          onChange={(event) => setSigla(event.target.value)}
          placeholder="Ex.: RH"
          maxLength="5"
          required
        />
      </div>

      {erro && <p className="error-message">{erro}</p>}

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Cadastrar departamento'}
      </button>
    </form>
  )
}

export default DepartmentForm