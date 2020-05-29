import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { Colors, Bubble } from "../common";

const SectionContainer = styled.div`
  margin: 50px;
  padding: 50px 100px 100px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  background-color: ${Colors.BRIGHT_GREEN};
  color: ${Colors.GREEN_WHITE};
`;

const ContentContainer = styled.div`
  font-size: 35px;
  line-height: 60px;
  span {
    font-size: 42px;
    color: ${Colors.WHITE};
  }
`;
const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`;

const ToursCounter = styled.div``;

const AnimalsCounter = styled.div``;

const Counter = styled.div`
  font-size: 90px;
  color: ${Colors.WHITE};
  margin-bottom: 20px;
  ${(props) => (props.customStyle ? props.customStyle : null)}
`;

export const Section3 = () => {
  let observer = useRef();
  let [style, setStyle] = useState(0);

  let counterRef = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !style) {
        setStyle(
          css`
            animation-duration: 0.7s;
            animation-iteration-count: 1;
            animation-name: ${Bubble};
            animation-timing-function: cubic-bezier(1.5, 0.45, 1, 0.8);
          `
        );
      }

      // If it is to be animated everytime the couter element shows up below
      // code needs to be uncommented

      //   else if (!entries[0].isIntersecting && style) {
      //     console.log("else", entries);
      //     setStyle(null);
      //   }
    });
    if (node) observer.current.observe(node);
  });
  return (
    <SectionContainer>
      <ContentContainer>
        Come rain or shine, <span>Zooland</span> is a fun filled day out for all
        the family, and you'll need all day to see it all!
      </ContentContainer>
      <CounterContainer>
        <ToursCounter>
          <Counter customStyle={style} key={1} ref={counterRef}>
            13
          </Counter>
          <div>excellent and different tours</div>
        </ToursCounter>
        <AnimalsCounter>
          <Counter customStyle={style} key={2} ref={counterRef}>
            8,5
          </Counter>
          <div>thousands of animals in their natural environment</div>
        </AnimalsCounter>
      </CounterContainer>
    </SectionContainer>
  );
};
