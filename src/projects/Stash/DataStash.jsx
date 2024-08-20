import styled from "styled-components";
import FrameTMO from "../../pages/TMobile/TMframe";
import HeaderTMO from "../../pages/TMobile/TMheader";

import tmoDataStash from "./datahero.jpg";

const StashHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

const StashColLeft = styled.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${tmoDataStash}) no-repeat bottom center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom left;
  }
`;

const StashColRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1em;
    color: #e20074;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
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
      font-size: 4em;
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

const StashBanner = styled.div`
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
  padding: 0 2% 2% 2%;

  li {
    margin: 0;
    padding: 0;
    font-family: "swis721 roman", "Open Sans", sans-serif;
    font-size: 1em;
    line-height: 1.6em;
    color: #000000;
    text-align: left;
  }
`;

const PayFooter = styled(StashBanner)`
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

export default function DataStash() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <StashHero>
        <StashColLeft />
        <StashColRight>
          <h2>Introducing Data&nbsp;Stash</h2>
          <h3>Don't lose what you don't use.</h3>
          <h5>
            Now when you buy extra 4G LTE data, your unused data rolls to the
            next month. First, we'll start you with 10GB of Free 4G LTE data.
          </h5>
          <h4>
            <span>SWITCH NOW! CALL </span>(800)-555-1234
          </h4>
          <h6>
            Qualifying service req'd. Free 10GB avail. until 12/31/15. Use free
            10GB before data begins rolling, rolled data good for 12 mos.
          </h6>
        </StashColRight>
      </StashHero>
      <StashBanner>
        <h2>Go ahead - Keep the data that's yours.</h2>
        <h3>
          Data Stash™ lets you roll the extra unused 4G LTE data you paid for
          into the next month. It’s automatically included with your qualifying
          postpaid or prepaid Simple Choice plan, with no fees and no overage
          data charges, ever.
        </h3>
      </StashBanner>
      <StashBanner>
        <h2>Here’s how it works:</h2>
        <PayList>
          <li>
            Available to all T-Mobile customers on a postpaid or prepaid Simple
            Choice plan who purchase 3GB or more of 4G LTE data (1GB or more for
            postpaid tablet plans). No need to sign up – your Data Stash will
            begin automatically once you’ve used the up to 10GB of free 4G LTE
            data we give you!
          </li>
          <li>
            Within a day or so of activating, you’ll have access to your
            one-time 10GB of Free 4G LTE data.
          </li>
          <li>
            Once you’ve used up your Free 10GB, you’ll automatically start
            rolling your unused 4G LTE data into the next month.
          </li>
          <li>
            At the end of the month, all your unused 4G LTE data – rounded up to
            the nearest megabyte – rolls into your Data Stash to be used any
            time in the next 12 months.
          </li>
        </PayList>
      </StashBanner>
      <PayFooter>
        <h2>Call now! (800)-555-1234</h2>
        <h6>Offer not available in some areas</h6>
      </PayFooter>
    </FrameTMO>
  );
}
