import styled from "styled-components";
import Button from "./Button";

const RoundBtn = styled(Button)`
  --content-scale-factor: 1.5;
  box-sizing: border-box;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
  margin: 0.5rem;
  width: 2rem;
  height: 2rem;
  transition: 0.2s ease-in-out;

  > * {
    transition: 0.2s ease-in-out;
  }
`;

export default RoundBtn;
