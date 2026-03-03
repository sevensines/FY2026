import React from "react";
import styled from "styled-components";
import { COLORS as c } from "../../Theme";
import Button from "../../components/AnchorButton/AnchorButton";

import retro from "../../assets/retro-hero.svg";
import bgTile from "../../assets/vii/tile.jpg";
import Logo from "../../components/Logo/Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 16px;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;

const RetroHero = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: url(${bgTile}) repeat;
  background-color: ${c.orangexl};
`;

const RetroCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: clamp(30px, 5vw, 80px);
  padding-top: clamp(30px, 5vw, 40px);
  padding-bottom: clamp(30px, 5vw, 40px);
  background: ${c.gray};
  h1 {
    margin: 0;
    padding: 0 16px;
    color: ${c.orange};
    text-transform: uppercase;
  }
  h4 {
    margin: 0;
    padding: 0 16px;
    color: ${c.orangelt};
  }
  a {
    margin-top: 12px;
  }
  @media (min-width: 768px) {
    flex-basis: 52%;
    padding: clamp(30px, 3vw, 80px);
    padding-top: clamp(30px, 3vw, 40px);
    padding-bottom: clamp(30px, 3vw, 40px);
  }
  @media (min-width: 1024px) {
    flex-basis: 35%;
    padding: clamp(30px, 5vw, 80px);
    padding-top: clamp(30px, 5vw, 40px);
    padding-bottom: clamp(30px, 5vw, 40px);
  }
`;

const ColumnButtons = styled.div`
  display: flex;
  padding: 16px 16px 0 16px;
  a:first-child {
    margin-right: 16px;
  }
`;

const RetroImage = styled.div`
  flex-basis: 65%;
  width: 100%;
  height: auto;
  background: url(${retro}) no-repeat top left;
  background-size: cover;
`;

const GlowFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -12px;
  &.bt {
    transform: rotate(180deg);
  }
`;

const GlowBar = styled.div`
  width: 16px;
  height: 2px;
  background: ${c.orange};
`;
const GlowLine = styled.div`
  width: 2px;
  height: 14px;
  background: ${c.orange};
`;

const GlowCorner = styled.div`
  display: flex;
  flex-direction: column;

  &.tr {
    transform: rotate(90deg);
  }
`;

export default function TestLab() {
  const crumbs = [
    {
      text: "LAB907",
      url: "/Lab907",
    },
  ];

  return (
    <>
      <RetroHero>
        <RetroCopy>
          <GlowFrame>
            <GlowCorner>
              <GlowBar />
              <GlowLine />
            </GlowCorner>
            <GlowCorner className='tr'>
              <GlowBar />
              <GlowLine />
            </GlowCorner>
          </GlowFrame>
          <h1>Sean Swidler</h1>
          <h4>
            Frontend Developer with a background in graphic design and a focus
            on user experience and interactivity. Specializing in developing
            full scale responsive websites, web based applications, as well as
            logos and branding.
          </h4>
          <ColumnButtons>
            <Button text='Email' url='mailto:sevensines@gmail.com' />
            <Button
              text='LinkedIn'
              url='https://www.linkedin.com/in/sean-swidler-80a5b4b7/'
              blank
            />
          </ColumnButtons>
          <GlowFrame className='bt'>
            <GlowCorner>
              <GlowBar />
              <GlowLine />
            </GlowCorner>
            <GlowCorner className='tr'>
              <GlowBar />
              <GlowLine />
            </GlowCorner>
          </GlowFrame>
        </RetroCopy>
        <RetroImage />
      </RetroHero>
      <Container>HOVER LOGO ANIMATION</Container>
    </>
  );
}
