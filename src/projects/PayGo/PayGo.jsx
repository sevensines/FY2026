import styled from "styled-components";
import FrameTMO from "../../pages/TMobile/TMframe";
import HeaderTMO from "../../pages/TMobile/TMheader";

import tmoPayGoHero from "../../assets/tm/pyg-img/grocerycart.png";
import tmoPayTile from "../../assets/tm/pyg-img/tile.png";
import tmoIconCheck from "../../assets/tm/pyg-img/check.png";

const PayGoHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #efefef;
  background-image: url(${tmoPayTile});

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

const PayGoColLeft = styled.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${tmoPayGoHero}) no-repeat center center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
  }
`;

const PayGoColRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    line-height: 1em;
    color: #e20074;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
    &:nth-child(2) {
      font-size: 2.8rem;
    }
  }
  h3 {
    margin: 0 auto;
    padding: 0 12px;
    color: #000000;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.6em;
    line-height: 1em;
    text-align: center;
    &:nth-child(5) {
      font-size: 3.2rem;
    }
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h5 {
    margin: 0 auto;
    padding: 12px;
    color: #444444;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h6 {
    color: #777777;
    font-size: 0.6rem;
    font-weight: normal;
    text-align: center;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.8em;
      &:nth-child(2) {
        font-size: 3.7rem;
      }
    }
    h3 {
      font-size: 1.9em;
      line-height: 1em;
      &:nth-child(5) {
        font-size: 3.7rem;
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

const PayBanner = styled.div`
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

const PayList = styled.ul`
  padding: 0 2% 0 12%;
  list-style-image: url(${tmoIconCheck});

  li {
    margin: 0;
    padding: 0;
    font-family: "swis721 roman", "Open Sans", sans-serif;
    font-size: 1.2em;
    line-height: 1.4em;
    color: #000000;
    text-align: left;
  }
  @media (min-width: 768px) {
    column-count: 2;
    li {
      font-size: 1.2em;
      line-height: 2em;
    }
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 0 4% 2% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
      font-size: 3.6em;
      line-height: 1.3em;
      color: #000000;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
      > span {
        font-size: 1.6rem;
      }
    }
  }
`;

const PayFooter = styled(PayBanner)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;

export default function PayGo() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <PayGoHero>
        <PayGoColLeft />
        <PayGoColRight>
          <h2>We’ve changed the game for</h2>
          <h2>Pay as You GO!</h2>
          <h5>
            Get the talk and text you need, right when you need it. Add data as
            you go. All with no credit check and no annual contract.
          </h5>
          <h3>Prepaid Pay As You Go Plans</h3>
          <h3>$3/mo</h3>
          <h5>Get any combination of 30 minutes of talk or 30 texts.</h5>
          <h4>
            <span>ORDER NOW! CALL </span>(800)-555-1234
          </h4>
          <h6>
            Capable device required for 4G LTE speeds. Coverage not available in
            some areas.
          </h6>
        </PayGoColRight>
      </PayGoHero>
      <PayBanner>
        <h2>Prepaid Pay As You Go Plans</h2>
        <PayList>
          <li>No annual service contract</li>
          <li>No credit check</li>
          <li>No deposit</li>
          <li>Keep your phone number from month to month</li>
          <li>All on T-Mobile’s nationwide network</li>
        </PayList>
      </PayBanner>
      <PayBanner>
        <h2>Want more? No problem.</h2>
        <h3>
          Add additional talk and text at a low flat rate of 10 cents per
          minute/message (sending and receiving).
        </h3>
      </PayBanner>
      <PayBanner>
        <h2>Add a high-speed data pass.</h2>
        <h3>
          Need high-speed data? Our flexible passes will keep you streaming and
          downloading at 4G LTE speeds, plus each pass includes Smartphone
          Mobile HotSpot.
        </h3>
      </PayBanner>
      <PlanGrid>
        <PlanGridItem>
          <h5>
            <strong>
              $5<span>/DAY</span>
            </strong>
            <br />
            Daily pass—up to 500MB 4G LTE data
          </h5>
        </PlanGridItem>
        <PlanGridItem>
          <h5>
            <strong>
              $10<span>/week</span>
            </strong>
            <br />
            Weekly pass—up to 1GB of 4G LTE data
          </h5>
        </PlanGridItem>
      </PlanGrid>
      <PayFooter>
        <h2>Call now! (800)-555-1234</h2>
        <h6>Offer not available in some areas</h6>
      </PayFooter>
    </FrameTMO>
  );
}
