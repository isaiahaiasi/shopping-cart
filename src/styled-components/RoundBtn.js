import styled from "styled-components";
import colors from "./colors";
import Button from "./Button";

const RoundBtn = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${colors.btnBg};
  font-weight: bold;
  width: 2em;
  height: 2em;
  overflow: hidden;
`;

export default RoundBtn;
