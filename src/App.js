import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";
import { USERS } from "./UserDater.js";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul role="list">
        {USERS.map((userElement) => (
          <Player key={userElement.id} user={userElement} />
        ))}
      </ul>

      <Button>Reset scores</Button>
      <Button>New game</Button>
      <PlayerForm />
    </div>
  );
}

export default App;
