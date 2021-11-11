import React from "react";
import styled from "styled-components";
import Image from "../images/img-1.jpg";

const Section = styled.section`
  background: url(${Image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;
const Container = styled.div``;

const Hero = () => {
  return (
    <Section>
      <Container>
        <h1>title</h1>
        <p>Description</p>
        <button>Learn More</button>
      </Container>
    </Section>
  );
};

export default Hero;
