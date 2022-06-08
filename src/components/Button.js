import styled from "styled-components";

export default function Button({ onClick, children }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}

const ButtonStyle = styled.button`
  padding: 0.5rem;
  margin: 0.7rem;
  background-color: lime;
  font: inherit;
  color: rgb(93, 0, 255);
  border: none;
  border-radius: 6px;
`;
