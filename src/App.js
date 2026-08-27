import { useState } from 'react';
import Placar from './components/Placar';
import AcoesJogo from './components/AcoesJogo';
import Historico from './components/Historico';

export default function App() {
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);
  const [posseTimeA, setPosseTimeA] = useState(true);
  const [historico, setHistorico] = useState([]);
  const [jogadas, setJogadas] = useState([]);

  function registrarPontos(pontos) {
    const timeAtual = posseTimeA ? 'Time A' : 'Time B';

    if (posseTimeA) {
      setPontosA(pontosA + pontos);
    } else {
      setPontosB(pontosB + pontos);
    }

    setHistorico([
      ...historico,
      `${timeAtual} marcou +${pontos} ponto(s)`
    ]);

    setJogadas([
      ...jogadas,
      {
        time: timeAtual,
        pontos: pontos
      }
    ]);

    setPosseTimeA(!posseTimeA);
  }

  function passarBola() {
    setPosseTimeA(!posseTimeA);
  }

  // DESAFIO EXTRA 1 - Reiniciar partida
  function reiniciarPartida() {
    setPontosA(0);
    setPontosB(0);
    setPosseTimeA(true);
    setHistorico([]);
    setJogadas([]);
  }

  // DESAFIO EXTRA 2 - Desfazer última jogada
  function desfazerUltimaJogada() {
    if (jogadas.length === 0) {
      return;
    }

    const ultimaJogada = jogadas[jogadas.length - 1];

    if (ultimaJogada.time === 'Time A') {
      setPontosA(pontosA - ultimaJogada.pontos);
    } else {
      setPontosB(pontosB - ultimaJogada.pontos);
    }

    setHistorico(historico.slice(0, -1));
    setJogadas(jogadas.slice(0, -1));

    setPosseTimeA(ultimaJogada.time === 'Time A');
  }

  // DESAFIO EXTRA 3 - Condição de vitória
  const vencedor =
    pontosA >= 21
      ? 'Time A'
      : pontosB >= 21
      ? 'Time B'
      : null;

  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <h1>Placar do Jogo</h1>

      {vencedor && (
        <div
          style={{
            backgroundColor: '#22c55e',
            color: 'white',
            padding: '15px',
            margin: '20px 0',
            borderRadius: '10px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          🏆 {vencedor} venceu a partida!
        </div>
      )}

      <Placar
        pontosA={pontosA}
        pontosB={pontosB}
        posseTimeA={posseTimeA}
      />

      <AcoesJogo
        onPontuar={registrarPontos}
        onPassarBola={passarBola}
        jogoEncerrado={vencedor !== null}
      />

      <div style={{ marginTop: '20px' }}>
        <button onClick={desfazerUltimaJogada}>
          Desfazer Última Jogada
        </button>

        <button
          onClick={reiniciarPartida}
          style={{ marginLeft: '10px' }}
        >
          Reiniciar Partida
        </button>
      </div>

      <Historico historico={historico} />
    </div>
  );
}