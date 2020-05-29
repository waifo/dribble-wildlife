import React from "react";
import styled from "styled-components";

import { Link, Colors } from "../common";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  padding: 50px 100px;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  justify-self: end;
`;

const StyledText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${Colors.DARK_ORANGE};
`;
const UL = styled.ul`
  margin: 0;
`;
const LI = styled.li`
  display: inline-block;
  padding: 0px 30px;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderLeft>
      <StyledText>Zooland</StyledText>
      <div>WILDLIFE</div>
    </HeaderLeft>
    <HeaderRight>
      <UL>
        <LI>
          <Link>About Us</Link>
        </LI>
        <LI>
          <Link>Our Rules</Link>
        </LI>
        <LI>
          <Link>Tours</Link>
        </LI>
        <LI>
          <Link>Contact</Link>
        </LI>
        <LI>
          <Link>Buy Tickets</Link>
        </LI>
      </UL>
    </HeaderRight>
  </HeaderContainer>
);

export default Header;
