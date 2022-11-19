import styled from "styled-components";

export const ButtonSection = styled.button`
  border: none;
  border-radius: 20px;
  padding: 3%;
  width: 100px;
  background-color: ${(props) => (props.selecionado ? "#D8D8FF" : "#d4d4d4")};
  color: ${(props) => (props.selecionado ? "black" : "white")};
  cursor: pointer;
`;
export const WrapperButton = styled.div`
  display: flex;
  gap: 5%;
`;
