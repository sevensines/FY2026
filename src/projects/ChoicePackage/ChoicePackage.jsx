import styled from "styled-components";
import dinBlack from "./DINBk.woff";
import dinBold from "./DINBd.woff";
import dinReg from "./DINrg.woff";
import dinMed from "./DINMd.woff";
import dtvLogo from "./dtv-clr.svg";
import dtvHero from "./home-hero.jpg";
import dtvCheck from "./check.svg";

const DefaultFrameDTV = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Din Black;
    src: url(${dinBlack});
    font-weight: bold;
  }
  @font-face {
    font-family: Din Bold;
    src: url(${dinBold});
    font-weight: bold;
  }
  @font-face {
    font-family: Din;
    src: url(${dinReg});
    font-weight: normal;
  }
  @font-face {
    font-family: Din Med;
    src: url(${dinMed});
  }
`;

const DtvHeader = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #000000;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DtvLogo = styled.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${dtvLogo}) no-repeat center;
  background-size: cover;
`;

const DtvNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #ffd700;
    text-transform: uppercase;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`;

const DtvHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  background: url(${dtvHero}) no-repeat center center;
  background-size: cover;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DtvHeroCopy = styled.div`
  flex: 1;
  padding: 24px;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1.1em;
    color: #ffffff;
    text-shadow: 1px 1px 5px #434343;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
  }
  ul {
    padding: 0 2% 2% 6%;
    list-style-image: url(${dtvCheck});

    li {
      margin: 0;
      padding: 0;
      font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 1.4em;
      line-height: 1.8em;
      color: #ffffff;
      text-align: left;
    }
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #000000;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #ffa40f;
    border-bottom: 2px #ad6f0a solid;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3.2em;
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      line-height: 1em;
      color: #ffa40f;
      border: 0;
      border-radius: 0;
      background: transparent;
      span {
        display: block;
        color: #ffa40f;
        text-shadow: 1px 1px 5px #434343;
      }
    }
  }
`;

const DtvHeroHighlight = styled.div`
  width: 240px;
  background: #0390c6;
  h2 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 2.8em;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
    span {
      font-size: 0.4em;
    }
  }
  h3 {
    margin: 0 10px;
    padding: 16px 10px 10px 10px;
    text-align: center;
    font-size: 2.4em;
    line-height: 0.6em;
    font-family: "Din Med", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #ffffff;
    background: #0284b3;
    span {
      font-size: 1.4rem;
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
  h4 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    font-family: "Din Med", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #ffffff;
    background: #0284b3;
  }
  h5 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 0.9em;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
  }
  h6 {
    margin: 0;
    padding: 10px;
    font-size: 0.6em;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
  }
`;

const PromoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #03adee;
  h3 {
    margin: 0;
    padding: 0 0 16px 0;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
    font-size: 1.6em;
    line-height: 1.2em;
    font-weight: normal;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 8px 0;
    color: #03adee;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
    }
  }
`;

export default function ChoicePackage() {
  return (
    <DefaultFrameDTV>
      <DtvHeader>
        <DtvLogo />
        <DtvNumber>
          <h5>
            <span>Call for a quote </span>(800)-555-1234
          </h5>
        </DtvNumber>
      </DtvHeader>
      <DtvHero>
        <DtvHeroCopy>
          <h2>
            Get every Out-of-Market NFL game live Every Sunday exclusively on
            DIRECTV
          </h2>
          <ul>
            <li>Every out-of-market game</li>
            <li>Expert commentary</li>
            <li>Fantasy player analysis</li>
          </ul>
          <h4>
            <span>Call to order DIRECTV today! </span>(800)-555-1234
          </h4>
        </DtvHeroCopy>
        <DtvHeroHighlight>
          <h4>CHOICE</h4>
          <h5>
            Get First 3 months of HBO®, STARZ®, SHOWTIME® and Cinemax® at no
            extra cost.
            <br />
            <br />
            2016 NFL SUNDAY TICKET included at no extra cost with CHOICE Package
            and above.
          </h5>
          <h3>
            175+
            <br />
            <span>Channels</span>
          </h3>
          <h2>
            $60<span>/mo</span>
          </h2>
          <h6>
            For 24 Months w/ 24-mo. TV agmt & other qual. AT&T service. Regional
            sports fee applies in certain markets.
          </h6>
        </DtvHeroHighlight>
      </DtvHero>
      <PromoFooter>
        <h3>
          Discover the DIRECTV Difference DIRECTV has the right package for
          every price range
          <br />
          <br />
          Call to order DIRECTV today
        </h3>
        <h4>(800)-555-1234</h4>
      </PromoFooter>
    </DefaultFrameDTV>
  );
}
