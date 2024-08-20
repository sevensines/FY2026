import styled from "styled-components";
import HeaderTMO from "../../pages/TMobile/TMheader";
import FrameTMO from "../../pages/TMobile/TMframe";

import tmoJumpHero from "./jodgirl.png";
import tmoJumpLogo from "./jodlogo.svg";
import tmoJumpTile from "./jump-tile.png";
import tmoJumpMobile from "./newphone.svg";
import tmoJumpDollar from "./nodolla.svg";
import tmoJumpCal from "./calendar.svg";

const JumpHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background-image: url(${tmoJumpTile});

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

const JumpColLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;

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
    color: #e20074;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h6 {
    padding-top: 0;
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
      color: #ffffff;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`;

const JumpColRight = styled.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${tmoJumpHero}) no-repeat center center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom right;
    background-size: contain;
  }
`;

const JumpBanner = styled.div`
  padding: 24px 24px 0 24px;
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #000000;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
  }
  h6 {
    font-weight: normal;
    color: #444444;
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #ffffff;
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

    > strong {
      color: #000000;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
    }
  }
  img {
    width: 120px;
    height: 120px;
  }
`;

const JumpFooter = styled(JumpBanner)`
  padding: 24px;
  background-image: url(${tmoJumpTile});
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;

export default function Jump() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <JumpHero>
        <JumpColLeft>
          <img src={tmoJumpLogo} border='0' />
          <h3>Get the phone you want when you want up to 3X a year.</h3>
          <h4>
            <span>Call now!&nbsp;</span>
            (800)-555-1234
          </h4>
          <h6>For eligible devices. At participating stores.</h6>
        </JumpColLeft>
        <JumpColRight />
      </JumpHero>
      <JumpBanner>
        <h2>Don’t get stuck with a phone you don’t want!</h2>
        <h3>
          Don’t get stuck with a phone you don’t want! With JUMP! On Demand, a
          new upgrade program only from T-Mobile, you can switch to the latest
          phones with no waiting period or upgrade fees. Simply trade in your
          phone for a new one whenever you want up to three times a year.
          Available on select smartphones.
        </h3>
      </JumpBanner>
      <PlanGrid>
        <PlanGridItem>
          <img src={tmoJumpMobile} border='0' />
          <h5>
            <strong>Zero Upfront</strong>
            <br />
            Switch to a new phone whenever you want and pay nothing upfront.
          </h5>
        </PlanGridItem>
        <PlanGridItem>
          <img src={tmoJumpDollar} border='0' />
          <h5>
            <strong>Zero at Upgrade</strong>
            <br />
            Never pay to upgrade—just trade in your unwanted device.
          </h5>
        </PlanGridItem>
        <PlanGridItem>
          <img src={tmoJumpCal} border='0' />
          <h5>
            <strong>Zero Waiting</strong>
            <br />
            Why wait 2 years to upgrade when you don’t have to?
          </h5>
        </PlanGridItem>
      </PlanGrid>
      <JumpFooter>
        <h2>Call now! (800)-555-1234</h2>
        <h6>Offer not available in some areas</h6>
      </JumpFooter>
    </FrameTMO>
  );
}
