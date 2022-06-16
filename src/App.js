import { useEffect, useState } from "react";
import Button from "./components/Button/Button.js";
import Player from "./components/Player/Player.js";
import PlayerForm from "./components/Player/PlayerForm.js";
import { getFromLocal, setToLocal } from "./lib/localStorage";
import styled from "styled-components";
import GlobalStyle from "./globalStyles.js";

function App() {
  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  useEffect(() => setToLocal("players", players), [players]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetAllScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  return (
    <AppContainer>
      <h1>HEY! Highscore time!</h1>
      <GlobalStyle />
      {/* eslint-disable-next-line */}
      <ul className="Card" role="list">
        {players.map((player, index) => (
          <Player
            key={player.createPlayer}
            name={player.createPlayer}
            score={player.score}
            onIncreaseScore={() => increaseScore(index)}
            onDecreaseScore={() => decreaseScore(index)}
          />
        ))}
      </ul>
      <ButtonContainer>
        <Button onClick={resetAllScores}>Reset scores</Button>
        <Button onClick={resetAllPlayers}>Delete players</Button>
      </ButtonContainer>
      <PlayerForm onCreatePlayer={createPlayer} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  gap: 20px;
  border: 2px solid lime;
  background-color: rgb(93, 0, 255);

  h1 {
    color: lime;
    text-align: center;
    margin-top: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  margin: 0.7rem;
`;

export default App;
