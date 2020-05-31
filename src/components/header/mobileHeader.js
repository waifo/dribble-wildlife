import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { Colors, Hamburguer, Link } from "../common";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding: 10px;
`;
const StyledText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${Colors.DARK_ORANGE};
  justify-self: right;
`;

const SideMenuContainer = styled.div`
  position: absolute;
  left: 0;
  width: 150px;
  height: 250px;
  background-color: ${Colors.BRIGHT_ORANGE};
  z-index: 10;
`;

const UL = styled.ul`
  margin: 0;
  padding: 10px;
`;
const LI = styled.li`
  display: block;
  padding: 10px 0px;
`;

export const MobileHeader = () => {
  let [showMenu, toggleMenu] = useState(false);
  let node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown");
  }, []);

  const sideMenuHandler = () => {
    toggleMenu(!showMenu);
  };
  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      //Navigation to other contents
      // for now closing the sideMenu
      toggleMenu(false);
      return;
    }
    toggleMenu(false);
  };
  return (
    <Header>
      <Hamburguer onClick={sideMenuHandler} color={Colors.DARK_ORANGE} />
      <StyledText>Zooland</StyledText>
      {showMenu ? (
        <SideMenuContainer ref={node}>
          <UL>
            <LI>
              <Link
                onClick={handleClick}
                color={Colors.WHITE}
                hoverColor={Colors.WHITE}
              >
                About Us
              </Link>
            </LI>
            <LI>
              <Link
                onClick={handleClick}
                color={Colors.WHITE}
                hoverColor={Colors.WHITE}
              >
                Our Rules
              </Link>
            </LI>
            <LI>
              <Link
                onClick={handleClick}
                color={Colors.WHITE}
                hoverColor={Colors.WHITE}
              >
                Tours
              </Link>
            </LI>
            <LI>
              <Link
                onClick={handleClick}
                color={Colors.WHITE}
                hoverColor={Colors.WHITE}
              >
                Contact
              </Link>
            </LI>
            <LI>
              <Link
                onClick={handleClick}
                color={Colors.WHITE}
                hoverColor={Colors.WHITE}
              >
                Buy Tickets
              </Link>
            </LI>
          </UL>
        </SideMenuContainer>
      ) : null}
    </Header>
  );
};
