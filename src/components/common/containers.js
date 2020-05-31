import styled, { css } from "styled-components";

import { mediaQuery } from "./";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 100px;
  margin: 100px 0px;
  grid-gap: 20px;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 20px;
    padding: 20px;
    margin: 0px;
  `)}
  ${mediaQuery.tablet(css`
    padding: 10px;
  `)}
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 30px;
  ${mediaQuery.mobile(css`
    font-size: 22px;
    line-height: 40px;
  `)}
`;
