import styled from "styled-components";
import colors from "./colors";

const Button = styled.button`
  border: none;
  border: ${colors.btnBg} 2px solid;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 0.5em;
  font-weight: bold;
  background: ${(props) => (props.primary ? colors.btnBg : "none")};
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${colors.btnBg};
    color: white;
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid gold;
  }
`;

export default Button;
