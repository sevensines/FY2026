import styled from "styled-components";
/* import dshAriBlack from "../../../public/ds/ariblk.ttf";
import dshLogo from "../../../public/images/ds/dsh-img/dsh-wht.svg";
import dshLock from "../../../public/images/ds/dsh-img/lock-white.svg";
import dshChannel from "../../../public/images/ds/dsh-img/channels.png";
import dshNetflix from "../../../public/images/ds/dsh-img/netflix.png";
import dshRedZone from "../../../public/images/ds/dsh-img/redzone.png";
import dshPrimo from "../../../public/images/ds/dsh-img/premiums.png";
import dshVan from "../../../public/images/ds/dsh-img/van.png"; */

const OpenSans = "'Open Sans', Helvetica, Arial, sans-serif";

const DefaultFrameDSH = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #ef1b4a 0%, #992786 100%);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ari Black", ${OpenSans};
  }
  p {
    font-family: ${OpenSans};
  }
  @font-face {
    font-family: Ari Black;
    src: url("/public/fonts/ds/ariblk.ttf");
    font-weight: bold;
  }
`;

const DshHeader = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #ef1b4a;
  border-bottom: 2px solid #ffffff;
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
  background: url("/public/images/ds/dsh-img/dsh-wht.svg") no-repeat center;
  background-size: cover;
`;

const DshNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`;

const PriceHero = styled.div`
  position: relative;
  width: 320px;
  margin: 0 40px;
  padding: 30px 0 40px 0;
  border-bottom: 3px solid #fff;
  h1 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 4.8em;
    line-height: 0.9em;
    font-weight: bold;
    text-align: center;
    &:nth-child(2) {
      font-size: 2.3em;
    }
  }
  img {
    position: absolute;
    bottom: 42px;
    right: 62px;
    width: 27px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 700px;
    h1 {
      font-size: 10em;
      &:nth-child(2) {
        font-size: 4.6em;
      }
    }
    img {
      position: absolute;
      bottom: 43px;
      right: 153px;
      width: 55px;
      height: auto;
    }
  }
  @media (min-width: 960px) {
    width: 860px;
    h1 {
      font-size: 12em;
      &:nth-child(2) {
        font-size: 5.6em;
      }
    }
    img {
      position: absolute;
      bottom: 45px;
      right: 191px;
      width: 66px;
      height: auto;
    }
  }
`;

const PriceOffer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0 32px 0;
  border-bottom: 3px solid #fff;
  @media (min-width: 768px) {
    width: 700px;
    flex-direction: row;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`;

const OfferLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  h2 {
    margin: 0;
    padding: 0 8px 0 0;
    font-size: 6em;
    line-height: 1em;
    color: #ffffff;
    sup {
      position: relative;
      top: -16px;
      font-size: 2rem;
      line-height: 0;
    }
  }
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 2.6em;
    line-height: 1em;
    font-family: ${OpenSans};
    text-align: center;
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
    font-weight: lighter;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: ${OpenSans};
    font-size: 1.8em;
    line-height: 1em;
    text-align: center;
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    padding-right: 24px;
    h2 {
      font-size: 7em;
      sup {
        top: -16px;
        font-size: 2rem;
      }
    }
    h3 {
      padding: 16px 0 0 0;
      font-size: 3em;
    }
    h4 {
      font-size: 2.2em;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 8em;
      sup {
        top: -16px;
        font-size: 3rem;
      }
    }
    h3 {
      font-size: 3.6em;
    }
    h4 {
      font-size: 2.4em;
    }
  }
`;

const OfferRight = styled.div`
  flex: 2;

  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    color: #ffffff;
    font-size: 1.8em;
    line-height: 1em;
    letter-spacing: 6px;
    text-align: center;
    font-family: ${OpenSans};
    font-weight: lighter;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    letter-spacing: 6px;
    font-size: 1.1em;
    line-height: 1.2em;
    text-align: center;
    font-family: ${OpenSans};
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    border-left: 3px solid #ffffff;
    h3 {
      font-size: 3em;
      letter-spacing: 4px;
      border-bottom: 3px solid #fff;
    }
    h4 {
      font-size: 2em;
      line-height: 1em;
      letter-spacing: 4px;
    }
  }
  @media (min-width: 960px) {
    h3 {
      font-size: 3.6em;
      letter-spacing: 6px;
    }
    h4 {
      font-size: 2.4em;
      letter-spacing: 6px;
    }
  }
`;

const OfferCTA = styled.div`
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #992786;
    font-family: ${OpenSans};
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-bottom: 3px solid #992786;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    width: 700px;
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2.4em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
      border-bottom: 0;
      span {
        display: inline-block;
      }
    }
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`;

const LockChannels = styled.div`
  display: flex;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 5px solid #fff;
  img {
    width: 100%;
    max-width: 820px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`;

const OfferDetails = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 5px solid #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      color: #ffffff;
      font-size: 1.2em;
      line-height: 1.4em;
      font-family: ${OpenSans};
      font-weight: lighter;
    }
  }
  h4 {
    margin: 0;
    padding: 4px 0;
    font-size: 1.2em;
    line-height: 1.4em;
    font-family: ${OpenSans};
    font-weight: lighter;
    text-align: center;
    color: #ffffff;
    strong {
      font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
    }
  }
  @media (min-width: 768px) {
    width: 700px;
    flex-direction: row;
    h4 {
      font-size: 1.2em;
    }
  }
  @media (min-width: 960px) {
    width: 860px;
    h4 {
      font-size: 1.4em;
    }
  }
`;

const OfferDetailLeft = styled.div`
  flex: 1;
  padding: 0 24px;
`;

const OfferDetailRight = styled.div`
  flex: 1;
  padding: 0 24px;

  @media (min-width: 768px) {
    border-left: 5px solid #fff;
  }
`;

const Subsripctions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;

  h5 {
    margin: 0;
    padding: 12px 0;
    color: #ffffff;
    font-size: 1.4em;
    font-family: ${OpenSans};
    font-weight: normal;
    text-align: center;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    color: #ffffff;
    font-size: 0.8em;
    font-family: ${OpenSans};
    font-weight: lighter;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`;

const SubOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0 12px;
    font-family: ${OpenSans};
    color: #ffffff;
  }

  img {
    padding: 12px 24px;
    background: #ffffff;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FreeAddons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;

  p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 1.2em;
    text-align: center;
    font-family: ${OpenSans};
  }
  img {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
    img {
      display: flex;
    }
  }
`;

const AddonsLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;
const AddonsRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 768px) {
    border-left: 3px solid #fff;
  }
`;

const PromoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 24px;
  h3 {
    margin: 0;
    padding: 0 0 4px 0;
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
    color: #992786;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
  }
  h6 {
    color: #ffffff;
    text-align: center;
    font-family: ${OpenSans};
    font-weight: normal;
  }
  @media (min-width: 768px) {
    width: 700px;
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
  @media (min-width: 960px) {
    width: 860px;
  }
`;

export default function PriceLock() {
  return (
    <DefaultFrameDSH>
      <DshHeader>
        <DtvLogo />
        <DshNumber>
          <h5>
            <span>Call for a quote </span>(800)-555-1234
          </h5>
        </DshNumber>
      </DshHeader>
      <PriceHero>
        <h1>2-YEAR</h1>
        <h1>TV PRICE LOCK</h1>
        <img src='/public/images/ds/dsh-img/lock-white.svg' border='0' />
      </PriceHero>
      <PriceOffer>
        <OfferLeft>
          <div>
            <h2>
              <sup>$</sup>49
            </h2>
          </div>
          <div>
            <h3>99</h3>
            <h4>MO</h4>
          </div>
        </OfferLeft>
        <OfferRight>
          <h3>190 CHANNELS</h3>
          <h4>HOPPER SMART DVR</h4>
        </OfferRight>
      </PriceOffer>
      <OfferCTA>
        <h4>
          <span>LOCK IN YOUR PRICE TODAY!&nbsp;</span>(800)-555-1234
        </h4>
      </OfferCTA>
      <LockChannels>
        <img src='/public/images/ds/dsh-img/channels.png' border='0' />
      </LockChannels>
      <OfferDetails>
        <OfferDetailLeft>
          <ul>
            <li>
              <strong>No</strong> Local channels fee
            </li>
            <li>
              <strong>No</strong> Regional sports fee
            </li>
            <li>
              <strong>No</strong> HD programming fee
            </li>
            <li>
              <strong>No</strong> DVR fee
            </li>
            <li>
              <strong>No</strong> 1st TV Monthly fee
            </li>
            <li>Just $49.99/mo plus taxes</li>
          </ul>
        </OfferDetailLeft>
        <OfferDetailRight>
          <h4>
            <strong>Want to lock more?</strong>
          </h4>
          <h4>Each additional TV for $7/mo</h4>
          <h4>240 channels for $15/mo more</h4>
          <h4>290 channels for $25/mo more</h4>
        </OfferDetailRight>
      </OfferDetails>
      <Subsripctions>
        <h5>
          <strong>PLUS YOU CHOOSE</strong>
        </h5>
        <SubOptions>
          <img
            src='/public/images/ds/dsh-img/netflix.png'
            border='0'
            alt='Netflix'
          />
          <p>- or -</p>
          <img
            src='/public/images/ds/dsh-img/redzone.png'
            border='0'
            alt='RedZone'
          />
        </SubOptions>
        <div>
          <h5>Included for 1 year with no hassle</h5>
          <h6>No need to call. automatically removed after 1 year.*</h6>
        </div>
      </Subsripctions>
      <FreeAddons>
        <AddonsLeft>
          <p>Free&nbsp;Premiums&nbsp;for&nbsp;3&nbsp;months&nbsp;</p>
          <img src='/public/images/ds/dsh-img/premiums.png' border='0' />
        </AddonsLeft>
        <AddonsRight>
          <p>Free&nbsp;Professional&nbsp;Installation</p>
          <img src='/public/images/ds/dsh-img/van.png' border='0' />
        </AddonsRight>
      </FreeAddons>
      <PromoFooter>
        <h3>CALL NOW!</h3>
        <h4>(800)-555-1234</h4>
        <h6>
          Requires credit qualification, 24-month commitment with early
          termination fee and e-bill autopay.
          <br />
          Terms & Conditions
        </h6>
      </PromoFooter>
    </DefaultFrameDSH>
  );
}
