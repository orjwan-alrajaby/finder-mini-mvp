"use client";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer/"

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to Finder Mini</h1>
        <p>
          This is a minimalistic clone of Daft Finder.
        </p>
      </main>
      <Footer />
    </div>
  );
}