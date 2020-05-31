import styled from "styled-components";
import { Colors } from "./colors";

export const H3 = styled.h3`
  font-size: 28px;
  color: ${(props) => (props.color ? props.color : Colors.LIGHT_GREY)};
`;

export const H5 = styled.h5`
  color: ${(props) => (props.color ? props.color : Colors.LIGHT_GREY)};
`;
