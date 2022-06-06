import { useState } from "react";
import "./PlayerForm.css";

export default function PlayerForm() {
  const [players, setPlayers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { createPlayer } = form.elements;
    const addPlayer = { createPlayer: createPlayer.value, score: 0 };

    setPlayers([...players, addPlayer]);
    form.reset();
    createPlayer.focus();
  }

  console.log(players);

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label htmlFor="createPlayer">Name:</label>
      <input
        id="createPlayer"
        name="createPlayer"
        type="text"
        placeholder="Just typ in"
      />
      <button className="Create_button">Create player</button>
    </form>
  );
}
