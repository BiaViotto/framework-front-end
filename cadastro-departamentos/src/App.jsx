import React, { useEffect, useState } from 'react'
import DepartmentForm from './components/DepartmentForm'
import DepartmentList from './components/DepartmentList'

const URL = 'http://localhost:3000/departments'

function App() {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function carregarDepartamentos() {
      try {
        const response = await fetch(URL)

        if (!response.ok) {
          throw new Error('Não foi possível carregar os departamentos.')
        }

        const data = await response.json()
        setDepartments(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    carregarDepartamentos()
  }, [])

  async function handleCadastrar(departamento) {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(departamento)
    })

    if (!response.ok) {
      throw new Error('Não foi possível cadastrar o departamento.')
    }

    const novoDepartamento = await response.json()

    setDepartments((prev) => [...prev, novoDepartamento])
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Cadastro de Departamentos</h1>

        <p className="subtitle">
          Cadastre os departamentos do setor de RH.
        </p>

        <DepartmentForm onCadastrar={handleCadastrar} />
      </section>

      <section className="card">
        {loading ? (
          <p className="loading">Carregando departamentos...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <DepartmentList departments={departments} />
        )}
      </section>
    </main>
  )
}

export default App
