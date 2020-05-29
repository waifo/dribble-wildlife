import styled from "styled-components";
import { Colors } from "./colors";

export const Link = styled.a`
  color: ${Colors.LIGHT_GREY};
  cursor: pointer;
  &:hover {
    color: ${Colors.LIGHT_ORANGE};
  }
`;
