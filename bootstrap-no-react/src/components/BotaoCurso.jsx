import { Button } from "react-bootstrap";

export default function BotaoCurso() {
  const usarReactBootstrap = true;

  if (usarReactBootstrap) {
    return <Button variant="primary">Ver curso</Button>;
  }

  return (
    <button className="btn btn-primary">
      Ver curso
    </button>
  );
}