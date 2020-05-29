import { css } from "styled-components";

export const mediaQuery = {
  mobile: (cls) =>
    css`
      @media (max-width: 767px) {
        ${cls};
      }
    `,
  tablet: (cls) =>
    css`
      @media (min-width: 768px) and (max-width: 1023px) {
        ${cls};
      }
    `,
  desktop: (cls) =>
    css`
      @media (min-width: 1024px) and (max-width: 1199px) {
        ${cls};
      }
    `,
  fullHD: (cls) =>
    css`
      @media (min-width: 1200px) {
        ${cls};
      }
    `,
  mblAndTab: (cls) => css`
    @media (max-width: 1023px) {
      ${cls}
    }
  `,
};
