import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <button>Create player</button>
    </form>
  );
}
