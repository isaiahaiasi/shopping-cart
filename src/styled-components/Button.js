import styled from "styled-components";
import colors from "./colors";

const Button = styled.button`
  --font-size: 1.2rem;
  font-size: var(--font-size);
  border: none;
  border: ${colors.btnBg} 2px solid;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 0.5em;
  font-weight: bold;
  background: ${(props) => (props.primary ? colors.btnBg : "none")};
  transition: 0.2s ease-in-out;
  overflow: visible;

  &:hover {
    background: ${colors.btnBg};
    color: white;
    > * {
      transform: scale(1.5);
    }
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid gold;
  }

  /* I want to transform:scale contents on hover, so they need transition */
  > * {
    transition: 0.1s ease-in-out;
  }

  /* in lieu of margin collapsing */
  + Button {
    margin-left: 0;
  }

  /* otherwise, react-icons disappear */
  svg {
    overflow: visible;
  }
`;

export default Button;
