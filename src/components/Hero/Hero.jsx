import styled from "styled-components";
import Copy from "../Copy/Copy";
import Button from "../AnchorButton/AnchorButton";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: calc(42vh);
  border-bottom: 1px solid #f2bf80;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    height: calc(50vh);
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: clamp(30px, 5vw, 80px);
  padding-top: clamp(30px, 5vw, 40px);
  padding-bottom: clamp(30px, 5vw, 40px);
  background: #00161a;
  h2 {
    color: #ef8f30;
    text-transform: uppercase;
  }
  p {
    color: #f2bf80;
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
  padding-top: 16px;
  a:first-child {
    margin-right: 16px;
  }
`;

const ColumnRight = styled.div`
  background-color: #f2bf80;
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  padding: 1%;
  overflow: hidden;
  position: relative;

  img {
    filter: grayscale(100%) contrast(1) blur(0);
    flex 1 0 100%;
    height: 100%;
    max-width: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
    position: relative;
    width: 100%;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: #07373a;
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <ColumnLeft>
        <Copy title='Sean Swidler'>
          Frontend Developer with a background in graphic design and a focus on
          user experience and interactivity. Specializing in developing full
          scale responsive websites, web based applications, as well as logos
          and branding.
        </Copy>
        <ColumnButtons>
          <Button text='Email' url='mailto:sevensines@gmail.com' />
          <Button
            text='LinkedIn'
            url='https://www.linkedin.com/in/sean-swidler-80a5b4b7/'
            blank
          />
        </ColumnButtons>
      </ColumnLeft>
      <ColumnRight>
        <img src='src\assets\tower.jpg' />
      </ColumnRight>
    </HeroWrapper>
  );
}
