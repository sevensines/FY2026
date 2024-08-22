import styled from "styled-components";
import adtZurch from "../../assets/ad/fonts/zurch.ttf";
import adtZurchI from "../../assets/ad/fonts/zurchitalic.ttf";
import adtZurchIB from "../../assets/ad/fonts/zurchitalbold.ttf";
import adtZurchL from "../../assets/ad/fonts/zurchlight.ttf";
import adtResLogo from "./adt-res.svg";
import adtResHero from "./res-hero.jpg";
import adtCamOne from "./biz-cam1.png";
import adtCamTwo from "./biz-cam6.png";
import adtCamThree from "./biz-cam5.png";
import adtCamFour from "./biz-cam7.png";
import adtPulse from "./pulse-promo.png";

const DefaultFrameDTV = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url(${adtZurch});
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url(${adtZurch});
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url(${adtZurchIB});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url(${adtZurchI});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url(${adtZurchL});
  }
`;

const AdtHeader = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 2px -2px #999;
  border-top: 5px solid #0f9aff;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const AdtLogo = styled.div`
  width: 136px;
  height: 48px;
  padding: 20px 20px 0 20px;
  background: url(${adtResLogo}) no-repeat center;
  background-size: cover;
`;
const AdtNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #0061aa;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`;
const ResHero = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url(${adtResHero}) no-repeat center center;
  background-size: cover;
`;
const ResHeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 3px double #0061a8;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.7em;
    color: #0f9aff;
    text-transform: uppercase;
    text-align: center;
    font-family: Zurch Bold, "Open Sans", Helvetica, Arial, sans-serif;
  }
  h2 {
    margin: 0;
    padding: 12px 0;
    font-size: 2.2em;
    line-height: 1em;
    color: #0061a8;
    text-transform: uppercase;
    text-align: center;
    font-family: Zurch Bold, "Open Sans", Helvetica, Arial, sans-serif;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #0061a8;
    font-size: 1.3em;
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;
    font-family: Zurch Light, "Open Sans", Helvetica, Arial, sans-serif;
    span {
      color: #0f9aff;
    }
  }
  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px;
    font-size: 1.3em;
    line-height: 1em;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    font-family: Zurch Ital Bold, "Open Sans", Helvetica, Arial, sans-serif;
    background: #0061a8;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    font-size: 0.6em;
    line-height: 1em;
    color: #000000;
    text-align: center;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
const ResBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 24px;
  background: #0f9aff;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 1.4em;
    color: #ffffff;
    font-family: Zurch Light, "Open Sans", Helvetica, Arial, sans-serif;
    text-align: center;
    border-radius: 0;
    background: transparent;
  }
`;
const ResProducts = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 20px;
    font-size: 1.4em;
    color: #0f9aff;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
`;
const ResProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  padding: 0 4% 4% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ResGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px 8px 8px;

  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family: Zurch Light, "Open Sans", Helvetica, Arial, sans-serif;
  }

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      max-width: 200px;
    }
  }
`;
const ResQuoteForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const ResQuoteTypes = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;

  h4 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  img {
    width: 100%;
    max-width: 640px;
    height: auto;
  }
`;
const RezForm = styled.div`
  flex: 1;
  background: #ffffff;
  padding: 20px;
  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 0.8em;
    color: #000000;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
`;

const RezFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    wisth: 100%;
    height: 32px;
    margin: 6px 0;
    padding: 4px;
    border: 1px solid #0061a8;
  }
`;

export default function ResidentialADT() {
  return (
    <DefaultFrameDTV>
      <AdtHeader>
        <AdtLogo />
        <AdtNumber>
          <h5>
            <span>Call for a Free Home Security Review </span>(800)-555-1234
          </h5>
        </AdtNumber>
      </AdtHeader>
      <ResHero>
        <ResHeroCopy>
          <h2>
            Free Installation
            <br />
            on ADT Pulse Video
          </h2>
          <h3>Including A Wireless Security Camera</h3>
          <h1>$449</h1>
          <h5>Instant Savings</h5>
          <h6>See important terms and pricing here.</h6>
        </ResHeroCopy>
      </ResHero>
      <ResBanner>
        <h4>
          <span>To schedule an appointment, call&nbsp;</span>(800)-555-1234
        </h4>
      </ResBanner>
      <ResProducts>
        <h4>Home Surveillance Products</h4>
        <ResProductGrid>
          <ResGridItem>
            <img src={adtCamThree} border='0' />
            <h5>Wireless Security Camera</h5>
            <p>
              Remotely check in on your home and make sure all is safe while
              you're out and about.
            </p>
          </ResGridItem>
          <ResGridItem>
            <img src={adtCamOne} border='0' />
            <h5>Dome Security Camera</h5>
            <p>
              These can be mounted almost anywhere, provides 360° viewing with
              clear imaging.
            </p>
          </ResGridItem>
          <ResGridItem>
            <img src={adtCamTwo} border='0' />
            <h5>Indoor Color Security Camera</h5>
            <p>
              High-resolution color cameras allow you to see around your home in
              full color.
            </p>
          </ResGridItem>
          <ResGridItem>
            <img src={adtCamFour} border='0' />
            <h5>DVR</h5>
            <p>
              Clear audio and video and remote viewing, record from all cameras
              at the same time.
            </p>
          </ResGridItem>
        </ResProductGrid>
      </ResProducts>
      <ResBanner>
        <h4>Get video surveillance with ADT Pulse Solutions</h4>
      </ResBanner>
      <ResQuoteForm>
        <ResQuoteTypes>
          <h4>Control your home from anywhere with your mobile device. Free</h4>
          <img src={adtPulse} border='0' />
        </ResQuoteTypes>
        <RezForm>
          <h5>Free Security Quote</h5>
          <p>
            Please complete the form below and an ADT Representative will call
            you with information about ADT's products and services.
          </p>
          <RezFormContainer>
            <input type='text' placeholder='Business Name' />
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='tel' placeholder='Phone' />
            <input type='email' placeholder='Email' />
            <input type='number' placeholder='Zip Code' />
          </RezFormContainer>
        </RezForm>
      </ResQuoteForm>
    </DefaultFrameDTV>
  );
}
