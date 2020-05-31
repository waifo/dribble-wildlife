import React from "react";
import styled from "styled-components";

import { Section, Content, Image, Colors, mediaQuery, H3 } from "../common";
import Flower from "../../images/flower.png";

const ImageContainer = styled.div``;

const ContentContainer = styled.div`
  justify-items: left;
  ${Content} {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Section1 = () => (
  <Section>
    <ImageContainer>
      <Image src={Flower} />
    </ImageContainer>
    <ContentContainer>
      <H3 color={Colors.LIGHT_ORANGE}>Our Mission</H3>
      <Content>
        Connecting people with nature. Safeguarding species from extinction
      </Content>
    </ContentContainer>
  </Section>
);
