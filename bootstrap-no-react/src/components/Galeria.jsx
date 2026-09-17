export default function Galeria() {
  const blocos = [
    "Bloco 1",
    "Bloco 2",
    "Bloco 3",
    "Bloco 4",
    "Bloco 5",
    "Bloco 6"
  ];

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Galeria Responsiva</h1>

      <div className="row g-4">
        {blocos.map((bloco, index) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={index}
          >
            <div className="p-5 bg-primary text-white rounded text-center">
              {bloco}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}