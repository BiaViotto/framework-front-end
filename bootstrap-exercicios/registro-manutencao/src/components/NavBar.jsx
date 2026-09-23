export default function NavBar({ abaAtiva, setAbaAtiva }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
      <div className="container-fluid">

        <span className="navbar-brand">
          Manutenção
        </span>

        <div className="navbar-nav">

          <button
            className={`nav-link ${
              abaAtiva === "cadastro" ? "active" : ""
            }`}
            onClick={() => setAbaAtiva("cadastro")}
          >
            Cadastro
          </button>

          <button
            className={`nav-link ${
              abaAtiva === "historico" ? "active" : ""
            }`}
            onClick={() => setAbaAtiva("historico")}
          >
            Histórico
          </button>

        </div>
      </div>
    </nav>
  );
}