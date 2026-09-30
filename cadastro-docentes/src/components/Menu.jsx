function Menu({ setActiveScreen, onLogout }) {
  return (
    <nav>
      <button onClick={() => setActiveScreen('welcome')}>
        Início
      </button>

      <button onClick={() => setActiveScreen('cadastro')}>
        Cadastrar
      </button>

      <button onClick={() => setActiveScreen('lista')}>
        Listar
      </button>

      <button onClick={onLogout}>
        Sair
      </button>
    </nav>
  );
}

export default Menu;