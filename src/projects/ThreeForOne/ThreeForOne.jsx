import styled from "styled-components";
import HeaderTMO from "../../pages/TMobile/TMheader";
import FrameTMO from "../../pages/TMobile/TMframe";

import tmoThreeHero from "./hero.jpg";
import tmoThreeTile from "./tile.png";
import tmoIconMobile from "./mobile.svg";
import tmoIconTravel from "./travel.svg";
import tmoIconDollar from "./nodolla.svg";

const ThreeOneHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #000000;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

const ThreeOneColLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;

  img {
    width: 60%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1em;
    color: #e20074;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
    &:nth-child(2) {
      color: #ffffff;
      font-size: 2rem;
    }
    &:nth-child(3) {
      font-size: 1.3rem;
    }
  }
  h3 {
    margin: 0 auto;
    padding: 12px;
    color: #ffffff;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h6 {
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: normal;
    text-align: center;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.6em;
      &:nth-child(2) {
        color: #ffffff;
        font-size: 3.3rem;
      }
      &:nth-child(3) {
        font-size: 2.1rem;
      }
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`;

const ThreeOneColRight = styled.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${tmoThreeHero}) no-repeat center center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-size: contain;
  }
`;

const ThreeOneBanner = styled.div`
  padding: 24px;
  text-align: center;
  background-color: #e20074;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #ffffff;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    margin: 0 auto;
    padding: 0 0 12px 0;
    color: #000000;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    padding: 3%;
    h2 {
      margin: 0 20%;
      font-size: 2.9em;
    }
    h3 {
      margin: 0 22%;
      font-size: 1.65em;
    }
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #e20074;
  background: url(${tmoThreeTile});
  border-left: 8px solid #e20074;
  border-right: 8px solid #e20074;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PlanGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  img {
    width: 120px;
    height: 120px;
  }
`;

export default function ThreeForOne() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <ThreeOneHero>
        <ThreeOneColLeft>
          <h2>NOW CALL AND TEXT IN</h2>
          <h2>MEXICO & CANADA</h2>
          <h2>JUST LIKE YOU DO IN THE U.S.</h2>
          <h3>
            Unlimited calling to Mexico and Canada from the U.S. Plus, get 4G
            LTE data and unlimited calling and texting when you’re in Mexico and
            Canada, just like in the U.S.
          </h3>
          <h4>
            <span>Call now!&nbsp;</span>
            (800)-555-1234
          </h4>
          <h6>
            Device, network & coverage impact experience and speeds, which vary.
            Image does not depict coverage.
          </h6>
        </ThreeOneColLeft>
        <ThreeOneColRight />
      </ThreeOneHero>
      <ThreeOneBanner>
        <h3>
          Our new simple choice plans include coverage in 3 countries for the
          price of 1
        </h3>
        <h2>U.S., Mexico, and Canada</h2>
      </ThreeOneBanner>
      <PlanGrid>
        <PlanGridItem>
          <img src={tmoIconMobile} border='0' />
          <h5>
            Unlimited calling to and from the U.S. to any number, including
            mobile phones, in Mexico and Canada.
          </h5>
        </PlanGridItem>
        <PlanGridItem>
          <img src={tmoIconTravel} border='0' />
          <h5>
            Now when you travel throughout the U.S., Mexico, & Canada your phone
            works the same with 4G LTE data and unlimited calling and texting.
          </h5>
        </PlanGridItem>
        <PlanGridItem>
          <img src={tmoIconDollar} border='0' />
          <h5>
            No other plan includes this much freedom and flexibility at no extra
            charge.
          </h5>
        </PlanGridItem>
      </PlanGrid>
      <ThreeOneBanner>
        <h2>Call now! (800)-555-1234</h2>
        <h6>Coverage not available in some areas</h6>
      </ThreeOneBanner>
    </FrameTMO>
  );
}
