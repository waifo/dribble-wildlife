import React from "react";
import styled, { css } from "styled-components";

import Flower from "../../images/flower.png";
import Lion from "../../images/lion.png";
import Giraffe from "../../images/giraffe.svg";

import {
  Section,
  Content,
  Image,
  H3,
  Colors,
  mediaQuery,
  Link,
} from "../common";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  height: 350px;
  div {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  ${(props) => (props.customStyle ? props.customStyle : null)}
`;

const ContentContainer = styled.div`
  padding: 50px;
  ${mediaQuery.mblAndTab(css`
    padding: 0px;
  `)}
`;

const TourLink = styled(Link)`
  font-weight: 600;
  margin: 20px 0px;
  display: block;
  font-size: 16px;
`;

export const Section4 = () => {
  return (
    <Section>
      <ImageContainer>
        <div style={{ "background-color": Colors.LIGHT_BLUE }}>
          <Image src={Flower} />
        </div>
        <div style={{ "background-color": Colors.LIGHT_YELLOW }}>
          <Image src={Giraffe} />
        </div>
        <div style={{ "background-color": Colors.LIGHT_PEACH }}>
          <Image src={Lion} />
        </div>
      </ImageContainer>
      <ContentContainer>
        <H3 color={Colors.DARK_GREY}>Animals and Tours</H3>
        <Content>
          For a great day out, you can't beat Edinburgh Zoo. Our World class
          attractions and our extensive animal collection will provide you and
          your family with memories to last a lifetime.
          <TourLink color={Colors.LIGHT_ORANGE}>Get Your Tour &#9;></TourLink>
        </Content>
      </ContentContainer>
    </Section>
  );
};
