import React from "react";
import styled from "styled-components";

import { PageLayout, Card } from "components/common";

import backgroundImg from "img/fusion.jpg";
import logo from "img/mant.png";
import masks from "img/masks.png";
import stats from "img/stats.png";

const Showcase = styled.div`
  color: #fff;
  background: rgba(1, 45, 120);
  padding: 2rem;
  position: relative;
  left: 0;

  &:before {
    content: "";
    background: url(${backgroundImg}) no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  height: 50vh;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledImg = styled.img`
  width: 280px;
  z-index: 10;
  justify-self: center;

  @media (min-width: 768px) {
    align-self: center;
    width: 480px;
  }
`;

const ShowcaseContent = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  align-self: start;
  margin-top: -20px;
  z-index: 10;

  > p {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    align-self: center;

    > p {
      display: inline-block;
    }
  }
`;

const MaskImg = styled.img`
  width: 350px;
  z-index: 10;
  justify-self: center;

  @media (min-width: 768px) {
    align-self: center;
    width: 480px;
  }
`;

export default function Home() {
  return (
    <PageLayout>
      <Showcase>
        <ShowcaseContainer>
          <StyledImg src={logo} alt="The Sanitizers" />
          <ShowcaseContent>
            affordable disinfectant fogging treatment!
            <p>Free Estimates!</p>
          </ShowcaseContent>
        </ShowcaseContainer>
      </Showcase>
      <Card backgroundColor={"red"} lheading>
        <div>
          <h3>Tested on Pathogens</h3>
          <p>
            Our spray has been tested and shown to be effective at killing a
            variety of pathogens. You can rest easy knowing your home or
            business is safe from invisible predators.
          </p>

          <MaskImg src={stats} alt="The Sanitizers" />
        </div>
      </Card>
      <Card>
        <div>
          <h3>Disposable masks for sale</h3>
          <p>
            THE ULTIMATE MULTIPURPOSE MASK Disposable Throwaway Face Masks
            Provide Fast, Effective Protection Against Mold, Allergens & Fumes
            Great for Airport Travel, Public Transportation, Social Distancing,
            Cleaning, Grocery Shopping
          </p>

          <MaskImg src={masks} alt="The Sanitizers" />
        </div>
      </Card>
    </PageLayout>
  );
}
