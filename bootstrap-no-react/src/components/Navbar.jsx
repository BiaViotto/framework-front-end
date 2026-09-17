export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Meu Curso</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#inicio">
              Início
            </a>
            <a className="nav-link" href="#cursos">
              Cursos
            </a>
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}