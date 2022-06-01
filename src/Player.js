import "./Player.css";

export default function Player({ user }) {
  return (
    <li className="Player">
      <span className="Player__name">{user.name}</span> <button>-</button>
      {user.score}
      <button>+</button>
      <img
        className="Profile__image"
        src={user.image}
        alt={user.name}
        height="100"
      />
    </li>
  );
}
