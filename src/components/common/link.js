import styled from "styled-components";
import { Colors } from "./colors";

export const Link = styled.a`
  color: ${(props) => (props.color ? props.color : Colors.LIGHT_GREY)};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.hoverColor ? props.color : Colors.LIGHT_ORANGE)};
  }
`;
