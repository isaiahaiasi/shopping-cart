import styled from "styled-components";
import colors from "./colors";

const Button = styled.button`
  --content-scale-factor: 1.15;
  font-family: "Judson";
  font-size: 1.2rem;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: none;
  border: ${colors.defaultFill} 2px solid;
  border-radius: 10px;
  padding: 0.5em 1em;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.primary ? colors.accent : colors.defaultFill};
  transition: 0.2s ease-in-out;
  overflow: visible;

  &:hover,
  &:focus,
  &:active {
    ${(props) =>
      !props.disabled &&
      `
      outline: none;
      background: ${colors.accent};
      border-color: ${colors.accent};
      > * {
        transform: scale(var(--content-scale-factor));
      }
    `}
  }

  ${(props) =>
    props.added &&
    `
    color: ${colors.added};
    &:hover, &:focus, &:active {
      background-color: black;
    }
  `}

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: 0.2s ease-in-out;
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
