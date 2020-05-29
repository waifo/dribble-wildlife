import styled from "styled-components";
import { Colors } from "./colors";

export const Button = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-weight: bolder;
  border-radius: 5px;
  color: ${Colors.WHITE};
  background-color: ${Colors.BRIGHT_ORANGE};
  box-shadow: 0px 3px 10px 0px #ffd5c4;
  ${(props) => (props.customStyle ? props.customStyle : null)}
  &:active {
    transform: scale(0.98);
  }
`;
