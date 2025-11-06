import React from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";

export const Awards = () => {
  return (
    <BaseContainer>
      <Header>ISWC 2026 Awards</Header>

      <section className="mb-6">
        <SubHeader>SWSA Distinguished Dissertation Award 2026</SubHeader>
         <p>To be announced.</p>
      </section>

      <section className="mb-6">
        <SubHeader>Test-of-time Paper Award 2026</SubHeader>
        <p>To be announced.</p>
      </section>

      <section className="mb-6">
        <SubHeader>Best Research Paper</SubHeader>
        <p>To be announced.</p>
      </section>

      <section className="mb-6">
        <SubHeader>Best Resource Paper</SubHeader>
        <p>To be announced.</p>
      </section>

      <section className="mb-6">
        <SubHeader>Best In-Use Paper</SubHeader>
        <p>To be announced.</p>
      </section>

      <section className="mb-6">
        <SubHeader>Best Poster</SubHeader>
        <p>To be announced.</p>
      </section>

      <section>
        <SubHeader>Best Demo</SubHeader>
        <p>To be announced.</p>
      </section>
    </BaseContainer>
  );
};

export default Awards;
