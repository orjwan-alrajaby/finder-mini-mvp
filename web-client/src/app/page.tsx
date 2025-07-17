"use client";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer/";
import PropertiesList from "./components/properties/PropertiesList";
import Filter from "./components/properties/Filter";
import { dummyProperties } from "./data"

import styled from "styled-components";
import { media } from "./StyledComponentsConfig/utils";

// TODO: fix/change temporary setup
const StyledHeader = styled.header` 
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;

  ${media.min.lg`
    padding: 1.5rem 3rem 0;
  `}
`

export default function Home() {
  return (
    <div>
      <NavBar />
      <StyledHeader>
        <div />
        <Filter />
      </StyledHeader>
      <main>
        <PropertiesList properties={dummyProperties} />
      </main>
      <Footer />
    </div>
  );
}