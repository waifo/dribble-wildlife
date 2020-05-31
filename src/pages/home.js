import React from "react";
import styled from "styled-components";

import Banner from "../components/banner";
import { DesktopHeader, MobileHeader } from "../components/header";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "../components/section";

const HomeContainer = styled.div``;

const Home = () => {
  const isDesktop =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false;

  return (
    <HomeContainer>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </HomeContainer>
  );
};

export default Home;
