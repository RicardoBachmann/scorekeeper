import "../components/PlayerForm.css";

export default function PlayerForm({ onCreatePlayer }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { createPlayer } = form.elements;
    const addPlayer = { createPlayer: createPlayer.value, score: 0 };
    onCreatePlayer(addPlayer);
    form.reset();
    createPlayer.focus();
  }

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
