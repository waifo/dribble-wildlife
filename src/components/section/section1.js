import React from "react";
import styled from "styled-components";

import { Image, Colors } from "../common";
import Flower from "../../images/flower.png";

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 100px;
  margin: 100px 0px;
  justify-items: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 300px;
`;

const ContentContainer = styled.div`
  justify-items: left;
  color: ${Colors.LIGHT_GREY};
  div {
    font-size: 30px;
    line-height: 40px;
  }
`;

const H3 = styled.h3`
  font-size: 28px;
  color: ${Colors.LIGHT_ORANGE};
`;

export const Section1 = () => (
  <SectionContainer>
    <ImageContainer>
      <Image src={Flower} />
    </ImageContainer>
    <ContentContainer>
      <H3>Our Mission</H3>
      <div>
        Connecting people with nature. Safeguarding species from extinction
      </div>
    </ContentContainer>
  </SectionContainer>
);
