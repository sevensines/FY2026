import styled from "styled-components";
import FrameTMO from "../../pages/TMobile/TMframe";
import HeaderTMO from "../../pages/TMobile/TMheader";

//import tmoPrepaidHero from "../../../public/images/tm/pre-img/prehero.png";/
//import tmoBYOD from "../../../public/images/tm/pre-img/byod.png";

const PrepaidHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/public/images/tm/pre-img/prehero.png") no-repeat top center;
  background-size: cover;
`;

const PrepaidHeroCols = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PrepaidColLeft = styled.div`
  flex: 2;
`;

const PrepaidColRight = styled.div`
  flex: 3;
  padding: 4% 4% 0 4%;
  line-height: 0rem;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  h3 {
    margin: 0;
    padding: 20px 0;
    font-size: 1.2em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.2em;
    line-height: 1em;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3em;
    }
    h3 {
      font-size: 1.4em;
      line-height: 1.2em;
    }
  }
`;

const PrepaidHeroGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 8px;
  padding: 20px 0 8% 0;
  @media (min-width: 768px) {
    padding: 20px 0 8% 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PrepaidGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 200px;
  padding: 0;

  h2 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;

    > strong {
      font-size: 6em;
      line-height: 1.3rem;
      color: #e20074;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
      > span {
        font-size: 0.8rem;
        color: #000000;
      }
      > sup {
        position: relative;
        top: -24px;
        font-size: 1.2rem;
        line-height: 0rem;
      }
    }
  }
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.8em;
    line-height: 1rem;
    color: #e20074;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  h4 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1em;
    line-height: 0.1rem;
    color: #000000;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 0.6em;
    line-height: 0.6rem;
    color: #000000;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
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
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
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

const DeviceBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DeviceLeft = styled.div`
  flex: 1;
  min-height: 200px;
  background: url("/public/images/tm/pre-img/byod.png") no-repeat center center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const DeviceRight = styled.div`
  flex: 3;
  padding: 24px;
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #e20074;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1em;
    line-height: 1.2em;
    color: #000000;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
  }
  h6 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 0.6em;
    line-height: 1.2em;
    color: #777777;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
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

export default function PrePaid() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <PrepaidHero>
        <PrepaidHeroCols>
          <PrepaidColLeft />
          <PrepaidColRight>
            <h2>We’re breaking the rules of prepaid.</h2>
            <h3>Don’t settle for second-rate prepaid wireless.</h3>
            <h5>
              Get 4G LTE data and unlimited talk and text with no data overages,
              no credit check, and no annual contract. All on T-Mobile's
              Nationwide 4G LTE Network.
            </h5>
            <br />
            <h3>Choose from three Simply Prepaid plans:</h3>
          </PrepaidColRight>
        </PrepaidHeroCols>
        <PrepaidHeroGrid>
          <PrepaidGridItem>
            <h2>
              <strong>
                <sup>$</sup>40<span>/ month</span>
              </strong>
            </h2>
            <h3>4G LTE DATA</h3>
            <h4>
              UNLIMITED TALK & TEXT<sup>*</sup>
            </h4>
            <h5>on our network + up to 1GB of 4G LTE</h5>
          </PrepaidGridItem>
          <PrepaidGridItem>
            <h2>
              <strong>
                <sup>$</sup>50<span>/ month</span>
              </strong>
            </h2>
            <h3>4G LTE DATA</h3>
            <h4>
              UNLIMITED TALK & TEXT<sup>*</sup>
            </h4>
            <h5>on our network + up to 3GB of 4G LTE</h5>
          </PrepaidGridItem>
          <PrepaidGridItem>
            <h2>
              <strong>
                <sup>$</sup>60<span>/ month</span>
              </strong>
            </h2>
            <h3>4G LTE DATA</h3>
            <h4>
              UNLIMITED TALK & TEXT<sup>*</sup>
            </h4>
            <h5>on our network + up to 5GB of 4G LTE</h5>
          </PrepaidGridItem>
        </PrepaidHeroGrid>
      </PrepaidHero>
      <DeviceBanner>
        <DeviceLeft />
        <DeviceRight>
          <h3>
            Got your own device?
            <br />
            Bring it.
          </h3>
          <h5>
            Bring your device over to T-Mobile and sign up for new prepaid
            services without an annual service contract or credit check. A
            simple switch of your sim card could get you unlimited talk, text
            and data on our nationwide 4G LTE network.
            <br />
            <br />
            Call now to sign up for new services, or to add a new line to your
            existing account.
          </h5>
          <h6>
            Your device must be compatible with our network and capable of using
            a T-Mobile SIM card.
          </h6>
        </DeviceRight>
      </DeviceBanner>
      <PayFooter>
        <h2>Call now! (800)-555-1234</h2>
        <h6>Offer not available in some areas</h6>
      </PayFooter>
    </FrameTMO>
  );
}
