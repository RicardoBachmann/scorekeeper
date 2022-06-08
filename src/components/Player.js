import styled from "styled-components";

export default function Player({
  name,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <PlayerList>
      <span className="Player__name">{name}</span>
      <button onClick={onDecreaseScore}>-</button>
      {score}
      <button onClick={onIncreaseScore}>+</button>
    </PlayerList>
  );
}

const PlayerList = styled.li`
  list-style: none;
  padding: 0.7rem;
  margin: 0.7rem;
  display: flex;
  justify-content: space-evenly;
  gap: 2px;
  background-color: whitesmoke;
  border: 5px solid lime;
`;
