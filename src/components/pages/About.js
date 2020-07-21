import React from "react";
import styled from "styled-components";

import { PageLayout, Card } from "components/common";
import coc from "img/coc.png";

const CocImg = styled.img`
  width: 350px;
  z-index: 10;
  justify-self: center;

  @media (min-width: 768px) {
    align-self: center;
    width: 480px;
  }
`;

export default function About() {
  return (
    <PageLayout>
      <Card lheading>
        <div>
          <h3>About Our Organization</h3>
          <p>
            We offer fogging for your business or home. Insuring all
            surfaces are treated, which regular cleaning and disinfecting won't
            reach and many times is simply missed. The product we use is
            non-toxic, pet and people friendly, and food area safe. No wipe down
            necessary. It is EPA approved, and kills the
            <span class="corona-decoration">Coronavirus</span>
            in seconds!
          </p>
          <p>
            We also offer a $20 dollar maintenance spray to be used between
            regular cleaning, which requires you to wipe and rinse. This is a
            great product for heavily used areas, such as door knobs, light
            switches and bathrooms between your fogging treatments.
          </p>
        </div>
      </Card>
      <Card backgroundColor={"red"}>
        <div>
          <CocImg src={coc} alt="TheSanitizers" />
          <p>We are a member of the Texarkana Chamber of Commerce.</p>
        </div>
      </Card>
    </PageLayout>
  );
}
