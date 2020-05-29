import React from "react";
import styled from "styled-components";

import Header from "../components/header";
import Banner from "../components/banner";
import { Section1, Section2, Section3 } from "../components/section";

const HomeContainer = styled.div``;

const Home = () => (
  <HomeContainer>
    <Header />
    <Banner />
    <Section1 />
    <Section2 />
    <Section3 />
  </HomeContainer>
);

export default Home;
