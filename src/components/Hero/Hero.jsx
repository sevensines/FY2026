import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
//import svnHero from "../../../public/images/tower.jpg";
//import iconBio from "../../../public/braille-bio.svg";

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${f.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
  animation: 400ms fadeIn ease-out;

  @keyframes fadeIn {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const BioHeader = styled.div`
  display: flex;
  background: ${f.orange};
`;

const BioIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 36px;
  height: auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 56px;
  }
`;

const BioBanner = styled.div`
  display: flex;
  flex: 1 1 100%;
  height: 32px;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: ${f.blau};

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
    background-color: ${f.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

const BioDetails = styled.div`
  display: flex;
`;

const BioBraille = styled.div`
  display: flex;
  flex-direction: column;
  width: 36px;
  height: auto;
  padding: 14px 8px 0 8px;
  text-align: center;
  opacity: 0.4;
  order: 2;

  @media (min-width: 768px) {
    width: 56px;
    padding: 20px 8px 0 8px;
    order: 1;
  }
`;

const BioCopy = styled.div`
  flex: 1;
  padding: 8px 16px 8px 8px;
  order: 3;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    order: 2;
    padding: 16px;
    font-size: 1rem;
  }
  @media (min-width: 960px) {
    padding: 16px 32px 24px 32px;
  }
`;

const BioDate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 0;
  height: auto;
  padding: 0;
  text-align: center;
  order: 1;

  h4 {
    position: absolute;
    bottom: 20px;
    margin: 0;
    padding: 0 0 0 8px;
    color: ${f.graumt};
    font-size: clamp(1em, 1.2em, 1.2em);
    font-weight: 400;
    &:last-child {
      bottom: 4px;
    }
  }

  @media (min-width: 768px) {
    width: 108px;
    padding: 0 16px;
    order: 3;
    h4 {
      bottom: 36px;
      padding: 0;
      font-size: clamp(1em, 4em, 4em);
      &:last-child {
        bottom: -8px;
      }
    }
  }
  @media (min-width: 960px) {
    width: 124px;
    h4 {
      bottom: 42px;
      font-size: clamp(1em, 4.5em, 5em);
      &:last-child {
        bottom: -16px;
      }
    }
  }
`;

export default function Hero() {
  return (
    <BioWrapper>
      <BioContainer>
        <BioHeader>
          <BioIcon>i</BioIcon>
          <BioBanner>
            <img src='/public/images/tower.jpg' />
          </BioBanner>
        </BioHeader>
        <BioDetails>
          <BioBraille>
            <img src='/public/images/braille-bio.svg' />
          </BioBraille>
          <BioCopy>
            I'm a Front End Web Developer with over 10 years of experience
            designing and building responsive user-focused websites and web
            based applications. With a background in graphic design, I bring a
            strong visual sensibility alongside solid technical skills, allowing
            me to translate complex ideas into clean, intuitive user
            experiences. Throughout my career, I've focused on creating
            scalable, accessible, and responsive UI solutions that balance
            performance with thoughtful design. I enjoy collaborating with
            cross-functional teams to deliver products that are both visually
            compelling and easy&nbsp;to&nbsp;use.
          </BioCopy>
          <BioDate>
            <h4>20</h4>
            <h4>26</h4>
          </BioDate>
        </BioDetails>
      </BioContainer>
    </BioWrapper>
  );
}
