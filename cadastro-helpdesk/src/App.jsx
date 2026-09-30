import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import FormChamado from './components/FormChamado'
import ListaChamados from './components/ListaChamados'
import './index.css'

const URL = 'http://localhost:3000/chamados'

function App() {
  const [chamados, setChamados] = useState([])
  const [loading, setLoading] = useState(true)
  const [paginaAtiva, setPaginaAtiva] = useState('form')
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    async function carregarChamados() {
      try {
        const response = await fetch(URL)

        if (!response.ok) {
          throw new Error('Não foi possível carregar os chamados.')
        }

        const data = await response.json()
        setChamados(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    carregarChamados()
  }, [])

  async function handleCadastrar(chamado) {
    setEnviando(true)

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chamado)
      })

      if (!response.ok) {
        throw new Error('Não foi possível cadastrar o chamado.')
      }

      const novoChamado = await response.json()

      setChamados((prev) => [...prev, novoChamado])
      setPaginaAtiva('lista')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <>
      <NavBar
        paginaAtiva={paginaAtiva}
        onMudarPagina={setPaginaAtiva}
      />

      <main className="container">
        {paginaAtiva === 'form' && (
          <section className="card">
            <h1>Abrir Chamado</h1>

            <p className="subtitle">
              Abra um chamado para a equipe de TI.
            </p>

            <FormChamado
              onCadastrar={handleCadastrar}
              enviando={enviando}
            />
          </section>
        )}

        {paginaAtiva === 'lista' && (
          <section className="card">
            <ListaChamados
              chamados={chamados}
              loading={loading}
            />
          </section>
        )}
      </main>
    </>
  )
}

export default App