import React from "react";
import styled from "styled-components";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import logo from "img/logo.png";

const HeaderWrapper = styled.header`
  height: 200px;
  width: 100%;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: ${p => p.theme.primaryColor} solid 3px;
  z-index: 1000;
  background: white;

  > div {
    margin-top: 1rem;
  }
  > nav {
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    height: 120px;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
`;

const SocialMenu = styled.div`
  display: flex;
  justify-self: center;
  color: #777;
  font-size: 2rem;

  > a {
    margin-right: 0.5rem;
    color: #777;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  background: ${p => (p.isActive ? "red" : "white")};
  color: ${p => p.theme.bodyFontColor};
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    background: #f3f3f3;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
  }
`;

const StyledImg = styled.img`
  width: 280px;
  @media (min-width: 768px) {
    width: 380px;
    align-self: flex-start;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <StyledImg src={logo} alt="The Sanitizers" />
      <SocialMenu>
        <a
          href="mailto:SanitizerUSA@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.facebook.com/sanitizersusa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </SocialMenu>
      <Menu>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/about" isActive={pathname === "/about"}>
          About
        </StyledLink>
        <StyledLink to="/contact" isActive={pathname === "/contact"}>
          Contact
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
