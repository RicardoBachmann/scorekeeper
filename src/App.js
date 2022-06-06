import { useState } from "react";
import "./App.css";
import Button from "./components/Button.js";
import Player from "./components/Player.js";
import PlayerForm from "./components/PlayerForm.js";

function App() {
  const [players, setPlayers] = useState([]);

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

  return (
    <div className="App">
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

      <Button>Reset scores</Button>
      <Button>Delete players</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
