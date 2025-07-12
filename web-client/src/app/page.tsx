"use client";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer/";
import PropertiesList from "./components/properties/PropertiesList";
import { dummyProperties } from "./data"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <PropertiesList properties={dummyProperties} />
      </main>
      <Footer />
    </div>
  );
}