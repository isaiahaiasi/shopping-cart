import styled from "styled-components";
import colors from "./colors";
import Button from "./Button";

const RoundBtn = styled(Button)`
  --content-scale-factor: 1.5;
  box-sizing: border-box;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${colors.btnBg};
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  /* overflow: hidden; */
`;

export default RoundBtn;
