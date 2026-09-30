import React from 'react'

function NavBar({ paginaAtiva, onMudarPagina }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h2>Helpdesk TI</h2>

        <div className="nav-links">
          <button
            className={paginaAtiva === 'form' ? 'active' : ''}
            onClick={() => onMudarPagina('form')}
          >
            Abrir Chamado
          </button>

          <button
            className={paginaAtiva === 'lista' ? 'active' : ''}
            onClick={() => onMudarPagina('lista')}
          >
            Chamados Abertos
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar