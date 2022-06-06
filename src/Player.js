import "./Player.css";

export default function Player({ name, score }) {
  return (
    <li className="Player">
      <span className="Player__name">{name}</span> <button>+</button>
      {score}
      <button>-</button>
    </li>
  );
}
