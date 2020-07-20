import React from "react";
import styled from "styled-components";

const Content = styled.div`
  background: "#f3f3f3";
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.25rem;

  > div {
    background: ${p => (p.backgroundColor ? p.backgroundColor : "#f3f3f3")};
    color: ${p => (p.backgroundColor ? "white" : "black")};
    padding: 1rem;
    max-width: 1200px;
    

    > h3 {
    font-size: ${p => (p.lheading ? "2rem" : "1.25rem")};
    @media (min-width: 768px) {
      font-size: ${p => (p.lheading ? "3rem" : "1.25rem")};
    }

    
  }

  
  
`;

export const Card = ({ children, ...props }) => {
  return <Content {...props}>{children}</Content>;
};
