import "./Player.css";

export default function Player({
  user,
  setCount,
  increaseScore,
  decreaseScore,
}) {
  return (
    <li className="Player">
      <span className="Player__name">{user.name}</span>{" "}
      <button onClick={increaseScore}>+</button>
      {user.score}
      <button onClick={decreaseScore}>-</button>
      <img className="Profile__image" src={user.image} alt={user.name} />
    </li>
  );
}
