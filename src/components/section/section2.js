import React from "react";
import styled, { css } from "styled-components";

import { Image, Colors, mediaQuery } from "../common";
import Lion from "../../images/lion.png";

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 100px;
  margin: 100px 0px;
  justify-items: center;
  align-items: center;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-row-gap: 20px;
    padding: 20px;
    margin: 0px;
  `)}
  ${mediaQuery.tablet(css`
    padding: 10px;
  `)}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ContentContainer = styled.div`
  color: ${Colors.LIGHT_GREY};
  div {
    font-size: 18px;
    line-height: 30px;
    ${mediaQuery.mobile(css`
      font-size: 22px;
      line-height: 40px;
    `)}
  }
`;

const H3 = styled.h3`
  font-size: 28px;
  color: ${Colors.LIGHT_GREY};
`;

const ColoredText = styled.div`
  color: ${Colors.LIGHT_ORANGE};
  font-size: 20px;
  width: 50%;
`;
export const Section2 = () => (
  <SectionContainer>
    <ContentContainer>
      <H3>About our Zooland</H3>
      <div>
        Located in Devon, Paignton Zoo is one of the South West's most exciting
        visitor attractions. We're also a registered charity and part of a world
        wide network of zoos which cares for and breeds rare species thanks to
        guests who help to fund our conservative work
      </div>
      {/* <ColoredText>
        --It's a place to roam, discover and get in touch with your inner animal
      </ColoredText> */}
    </ContentContainer>
    <ImageContainer>
      <Image src={Lion} />
    </ImageContainer>
  </SectionContainer>
);
