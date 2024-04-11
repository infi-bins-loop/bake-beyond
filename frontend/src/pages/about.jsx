import React from "react";
import { Button, Image } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  margin: 2rem;
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 5rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: ${(imagePosRight) =>
    imagePosRight ? "6fr 4fr" : "4fr 6fr"};
  margin: 2rem;
  padding: 2rem;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 2rem;
`;

export default function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Button variant="none" onClick={() => navigate(-1)}>
          <ArrowLeft size="3rem" />
        </Button>
        <h1>About Us</h1>
      </div>
      <Wrapper imagePosRight>
        <TextWrapper>
          <h3>WELCOME TO THE WORLD OF Bake & Beyond</h3>
          <p>
            Here the perfect balance strikes that perfect chord. Lifting lives,
            inspiring lifestyles, spreading joy. For us it’s always been about
            that. Delighting in the discovery of a delicate, yet simple balance.
            Between the sensorial and sartorial. The classic and the modern.
            Handcraft and innovation. Health and indulgence. It’s the very DNA
            of how we create. It’s what defines who we are. A sense of beautiful
            balance. That is meant to translate into your life.
          </p>
        </TextWrapper>
        <Image
          src="https://images.unsplash.com/photo-1487377330423-12f2f3e6d27a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "640px", height: "400px" }} // Adjust width and height as needed
        />
      </Wrapper>
      <Wrapper imagePosLeft>
        <Image
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "640px", height: "400px" }} // Adjust width and height as needed
        />
        <TextWrapper>
          <h3>OUR BELIEFS</h3>
          <p>
            In Bake & Beyond, we think to innovate and improving ourself is the
            main goal in life. Yes we mean baking. Coming up with new recipes
            which has it’s own stories and adventure is the greatest moment in
            out life. We always like to make fresh new products so that you can
            enjoy your precious time with your hobbies and family. For us,
            Patisserie stands for everything we believe in.
          </p>
        </TextWrapper>
      </Wrapper>
      <Wrapper imagePosRight>
        <TextWrapper>
          <h3>WHY US?</h3>
          <p>
            It it’s all things natural and good. The glow of health. The palette
            of perfect crusts. The elegance of freshness. A deep, warm, rich hue
            that evokes a sense of comfort as well as temptation. It’s salty.
            Why? Because everything we do has a pinch of it. The underrated
            champion of baking. It takes the edge off bitterness. It enhances
            the depth of sweetness. And it keeps things real. Freshness is our
            key element in the recipes we have. Because without it, all the joy
            inside it will fade and we always strive to deliver the best in
            baking.
          </p>
        </TextWrapper>
        <Image
          src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "640px", height: "400px" }} // Adjust width and height as needed
        />
      </Wrapper>
    </Container>
  );
}
