import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import { Wrapper } from "./Home.style";
import Body from "../../Components/Body/Body";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </Wrapper>
  );
};

export default Home;
