import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="Card" role="list">
        <Player text="John Doe" score={20} />
        <Player text="Jane Doe" score={20} />
      </ul>

      <Button>Reset scores</Button>
      <Button>Delete players</Button>
      <PlayerForm />
    </div>
  );
}

export default App;
