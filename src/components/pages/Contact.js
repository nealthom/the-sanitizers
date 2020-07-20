import React from "react";

import { PageLayout, Card } from "components/common";

export default function Contact() {
  return (
    <PageLayout>
      <Card>
        <div>
          <h2>Little Rock Office</h2>
          <h3>
            <a href="tel:5014124658">501-412-4658</a>
          </h3>
          <p>3406 Crepe Myrtle Cove, Benton AR 72015</p>
          <ul>
            <li>Dave Segura</li>
            <li>Sue Segura</li>
          </ul>
          <h2>Texarkana Office</h2>
          <h3>
            <a href="tel:9032788918">903-278-8918</a>
          </h3>
          <p>3501 Circleview Drive, Texarkana AR 71854</p>
          <ul>
            <li>Alton Endsley</li>
            <li>Jill Mcmahon</li>
          </ul>
        </div>
      </Card>
      <Card backgroundColor={"red"}>
        <div>
          <h3>Contact Us</h3>
          <p>We look forward to helping you with your sanitization needs.</p>
        </div>
      </Card>
    </PageLayout>
  );
}
