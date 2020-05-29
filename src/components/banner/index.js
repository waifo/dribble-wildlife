import React from "react";
import styled, { css } from "styled-components";

import { Colors, Button, Bubble, SlideDown, mediaQuery } from "../common";
import Fox from "../../images/fox.svg";

const BannerContainer = styled.div`
  background-image: url(${Fox});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 60% 100%;
  ${mediaQuery.mobile(css`
    background: none;
  `)}
`;

const BannerTextContainer = styled.div`
  width: 40%;
  padding-left: 100px;
  ${mediaQuery.mobile(css`
    width: auto;
    padding: 20px;
    text-align: center;
  `)}
  ${mediaQuery.tablet(css`
    width: 60%;
    padding: 10px;
  `)}
`;

const TextLarge = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${Colors.DARK_GREY};
`;
const TextSmall = styled.div`
  width: 60%;
  line-height: 24px;
  color: ${Colors.LIGHT_GREY};
  margin: 40px 0px;
  ${mediaQuery.mobile(css`
    width: auto;
    margin: 20px 0px;
  `)}
`;

const ColoredText = styled.div`
  font-size: 120px;
  font-weight: 800;
  color: ${Colors.BRIGHT_GREEN};
  line-height: 110px;
  margin: 20px 0px;
  ${mediaQuery.mobile(css`
    font-size: 40px;
    line-height: 30px;
  `)}
`;

const TextContent = styled.div`
  visibility: hidden;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-name: ${SlideDown};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0, 1, 1, 1);
`;

const ButtonCss = css`
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-name: ${Bubble};
  animation-timing-function: cubic-bezier(1.5, 0.45, 1, 0.8);
`;

const Banner = () => (
  <BannerContainer>
    <BannerTextContainer>
      <TextLarge>Welcome to the</TextLarge>
      <TextContent>
        <ColoredText>Wildlife</ColoredText>
        <TextSmall>
          with over 2500 animals across 80 acers you are in for a really wild
          time at wildlife zoo
        </TextSmall>
      </TextContent>
      <Button customStyle={ButtonCss}>Get Your Tour</Button>
    </BannerTextContainer>
  </BannerContainer>
);

export default Banner;
