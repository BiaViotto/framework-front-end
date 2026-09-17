export default function Cards() {
  const cursos = [
    {
      id: 1,
      titulo: "Análise e Desenvolvimento de Sistemas",
      texto: "Aprenda a desenvolver sistemas e aplicações."
    },
    {
      id: 2,
      titulo: "Desenvolvimento Web",
      texto: "Crie sites e aplicações modernas para a web."
    },
    {
      id: 3,
      titulo: "Banco de Dados",
      texto: "Aprenda a organizar e gerenciar dados."
    },
    {
      id: 4,
      titulo: "Programação",
      texto: "Desenvolva sua lógica e suas habilidades de programação."
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Cursos</h1>

      <div className="row g-4">
        {cursos.map((curso) => (
          <div className="col-12 col-md-6" key={curso.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {curso.titulo}
                </h5>

                <p className="card-text">
                  {curso.texto}
                </p>

                <button className="btn btn-primary">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}