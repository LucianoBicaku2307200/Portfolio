import React from "react";

import {
  Header,
  HeroSection,
  Contact,
  About,
  ImageSection,
  Projects,
  Skills,
} from "./components";
import "./styles/main.css";

import Img1 from "./assets/img1-bg.jpg";
import Img2 from "./assets/img2-bg.jpg";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <ImageSection img_url={Img1} />
      <About />
      <ImageSection img_url={Img2} />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
