import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  margin: 0;
  background-color: rgb(137, 191, 182);
  padding: 8px;
  border-radius: 12px;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled.span`
  margin-left: 10px;
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/portfolio">
          <NavLink>Майя Колесникова</NavLink>
        </Link>
      </Title>
      <Nav>
        <Link href="/portfolio">
          <NavLink>Портфолио</NavLink>
        </Link>
        <Link href="/contact">
          <NavLink>Контакты</NavLink>
        </Link>
      </Nav>
    </Wrapper>
  );
};

export default Header;
