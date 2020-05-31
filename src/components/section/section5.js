import React from "react";
import styled from "styled-components";

import { Section, Content, Colors, Image, H3, H5 } from "../common";
import Croco from "../../images/crocodile.png";

const ImageContainer = styled.div``;

const ContentContainer = styled.div``;

export const Section5 = () => (
  <Section>
    <ContentContainer>
      <H3 color={Colors.DARK_GREY}>Connecting our people with Nature</H3>
      <H5 color={Colors.DARK_ORANGE}>Safguarding species from extinction</H5>
      <Content>
        Apart from getting close to over 1,000 rare and endangered animals,
        there are many different ways to enjoy your day out. You can experience
        a busy programme of educational events and activities - ranging from
        keeper talks through to hands-on animal encounters
      </Content>
    </ContentContainer>
    <ImageContainer>
      <Image src={Croco} />
    </ImageContainer>
  </Section>
);
