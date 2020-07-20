import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
  max-width: 1800px;
  margin: 200px auto 0 auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 139px auto 0 auto;
  }
`;

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
