import React from "react";
import styled, { css } from "styled-components";

import { Section, Content, H3, Image, Colors, mediaQuery } from "../common";
import Lion from "../../images/lion.png";

const SectionContainer = styled(Section)`
  ${mediaQuery.mobile(css`
    grid-template-rows: 2fr 1fr;
  `)}
`;

const ImageContainer = styled.div``;

const ContentContainer = styled.div``;

export const Section2 = () => (
  <SectionContainer>
    <ContentContainer>
      <H3 color={Colors.LIGHT_GREY}>About our Zooland</H3>
      <Content>
        Located in Devon, Paignton Zoo is one of the South West's most exciting
        visitor attractions. We're also a registered charity and part of a world
        wide network of zoos which cares for and breeds reare species thanks to
        guests who help to fund our conservative work
      </Content>
    </ContentContainer>
    <ImageContainer>
      <Image src={Lion} />
    </ImageContainer>
  </SectionContainer>
);
