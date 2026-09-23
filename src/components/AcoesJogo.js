export default function AcoesJogo({
  onPontuar,
  onPassarBola,
  jogoEncerrado
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        margin: '20px 0'
      }}
    >
      <button
        onClick={() => onPontuar(1)}
        disabled={jogoEncerrado}
      >
        +1 Ponto
      </button>

      <button
        onClick={() => onPontuar(2)}
        disabled={jogoEncerrado}
      >
        +2 Pontos
      </button>

      <button
        onClick={() => onPontuar(3)}
        disabled={jogoEncerrado}
      >
        +3 Pontos
      </button>

      <button
        onClick={onPassarBola}
        disabled={jogoEncerrado}
      >
        Trocar Posse
      </button>
    </div>
  );
}