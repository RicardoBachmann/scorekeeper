import styled from "styled-components";

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
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="createPlayer">Name:</label>
      <input
        id="createPlayer"
        name="createPlayer"
        type="text"
        placeholder="Just typ in"
      />
      <button>Create player</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  font: inherit;
  font-weight: 500;
  text-align: center;
  color: lime;
  background-color: rgb(93, 0, 255);

  button {
    padding: 10px;
    margin: 0.7rem;
    background-color: lime;
    font: inherit;
    font-weight: 500;
    color: rgb(93, 0, 255);
    border: none;
    border-radius: 6px;
  }

  input {
    border-color: lime;
    padding: 0.5rem;
  }
`;
