import styled from "styled-components";
import FrameADT from "../../pages/ADT/ADTframe";
import adtBizLogo from "./adt-biz.svg";
import adtBizHero from "./biz-hero.jpg";
import adtCamOne from "./biz-cam1.png";
import adtCamTwo from "./biz-cam2.png";
import adtCamThree from "./biz-cam3.png";
import adtCamFour from "./biz-cam4.png";
import adtRetail from "./adt-hanger.svg";
import adtClinic from "./adt-stetho.svg";
import adtTech from "./adt-gear.svg";
import adtFood from "./adt-bell.svg";
import adtOffice from "./adt-monitor.svg";
import adtService from "./adt-coffee.svg";

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
  background: url(${adtBizLogo}) no-repeat center;
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
const BizHero = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url(${adtBizHero}) no-repeat center center;
  background-size: cover;
`;
const BizHeroCopy = styled.div`
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
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
  h4 {
    margin: 0;
    padding: 12px 0;
    font-size: 1.3em;
    line-height: 1em;
    color: #0061a8;
    text-transform: uppercase;
    text-align: center;
    font-family: Zurch Ital Bold, "Open Sans", Helvetica, Arial, sans-serif;
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
const BizBanner = styled.div`
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
const BizProducts = styled.div`
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
const BizProductGrid = styled.div`
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
const BizGridItem = styled.div`
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
const BizQuoteForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const BizQuoteTypes = styled.div`
  flex: 3;
  padding: 4%;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
    column-count: 2;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 24px 0;
      font-size: 1.4em;
      line-height: 0.8em;
      color: #000000;
      font-family: Zurch Light, "Open Sans", Helvetica, Arial, sans-serif;

      img {
        width: 32px;
        height: 32px;
        margin-right: 12px;
      }
    }
  }
  @media (min-width: 768px) {
    ul {
      li {
        font-size: 2.4em;
        img {
          width: 48px;
          height: 48px;
          margin-right: 12px;
        }
      }
    }
  }
`;
const BizForm = styled.div`
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

const BizFormContainer = styled.div`
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

export default function BusinessADT() {
  return (
    <FrameADT>
      <AdtHeader>
        <AdtLogo />
        <AdtNumber>
          <h5>
            <span>Call for a Free Onsite Consultation </span>(800)-555-1234
          </h5>
        </AdtNumber>
      </AdtHeader>
      <BizHero>
        <BizHeroCopy>
          <h1>Save 50%</h1>
          <h3>
            on installation of
            <br />
            an adt security system
          </h3>
          <h3>
            <span>and</span>
          </h3>
          <h2>
            install 1 camera
            <br />
            get 1 free
          </h2>
          <h4>up to 8 cameras</h4>
          <h6>See important terms and pricing here.</h6>
        </BizHeroCopy>
      </BizHero>
      <BizBanner>
        <h4>
          <span>To schedule an appointment, call&nbsp;</span>(800)-555-1234
        </h4>
      </BizBanner>
      <BizProducts>
        <h4>Business Surveillance Products</h4>
        <BizProductGrid>
          <BizGridItem>
            <img src={adtCamThree} border='0' />
            <h5>Wireless Day/ Night Camera</h5>
            <p>
              Video motion- detection capable, with a light sensor for night
              vision. Captures clear, crisp images in a dark or low-light
              environment.
            </p>
          </BizGridItem>
          <BizGridItem>
            <img src={adtCamFour} border='0' />
            <h5>Wireless Day/ Night Camera</h5>
            <p>
              Video motion- detection capable, with a light sensor for night
              vision. Captures clear, crisp images in a dark or low-light
              environment.
            </p>
          </BizGridItem>
          <BizGridItem>
            <img src={adtCamTwo} border='0' />
            <h5>Wireless Day/ Night Camera</h5>
            <p>
              Video motion- detection capable, with a light sensor for night
              vision. Captures clear, crisp images in a dark or low-light
              environment.
            </p>
          </BizGridItem>
          <BizGridItem>
            <img src={adtCamOne} border='0' />
            <h5>Wireless Day/ Night Camera</h5>
            <p>
              Video motion- detection capable, with a light sensor for night
              vision. Captures clear, crisp images in a dark or low-light
              environment.
            </p>
          </BizGridItem>
        </BizProductGrid>
      </BizProducts>
      <BizBanner>
        <h4>What type of business are you? Get video surveillance.</h4>
      </BizBanner>
      <BizQuoteForm>
        <BizQuoteTypes>
          <h4>Control your business from anywhere with your mobile device.</h4>
          <ul>
            <li>
              <img src={adtRetail} border='0' />
              Retail
            </li>
            <li>
              <img src={adtClinic} border='0' />
              Clinical
            </li>
            <li>
              <img src={adtTech} border='0' />
              Tech
            </li>
            <li>
              <img src={adtFood} border='0' />
              Food
            </li>
            <li>
              <img src={adtOffice} border='0' />
              Office
            </li>
            <li>
              <img src={adtService} border='0' />
              Services
            </li>
          </ul>
        </BizQuoteTypes>
        <BizForm>
          <h5>Free Security Quote</h5>
          <p>
            Please complete the form below and an ADT Representative will call
            you with information about ADT's products and services.
          </p>
          <BizFormContainer>
            <input type='text' placeholder='Business Name' />
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='tel' placeholder='Phone' />
            <input type='email' placeholder='Email' />
            <input type='number' placeholder='Zip Code' />
          </BizFormContainer>
        </BizForm>
      </BizQuoteForm>
    </FrameADT>
  );
}
