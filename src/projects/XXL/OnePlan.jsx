import styled from "styled-components";
import HeaderVZN from "../../pages/Verizon/VZheader";
/* import NeueHaasDisplay from "../../../public/fonts/vz/NeueHaasGroteskDisplay.woff2";
import NeueHaasDisplayBold from "../../../public/fonts/vz/NeueHaasGroteskDisplayBold.woff2";
import NeueHaasDisplayMed from "../../../public/fonts/vz/NeueHaasGroteskDisplayMedium.woff2";
import NeueHaasText from "../../../public/fonts/vz/NeueHaasGroteskText.woff2";
import NeueHaasTextBold from "../../../public/fonts/vz/NeueHaasGroteskTextBold.woff2";
import NeueHaasTextMed from "../../../public/fonts/vz/NeueHaasGroteskTextMedium.woff2";
import vznConeS from "../../../public/images/vz/xxl-img/cone_s.png";
import vznConeM from "../../../public/images/vz/xxl-img/cone_m.png";
import vznConeL from "../../../public/images/vz/xxl-img/cone_l.png";
import vznConeXL from "../../../public/images/vz/xxl-img/cone_xl.png";
import vznConeXXL from "../../../public/images/vz/xxl-img/cone_xxl.png"; */

const DefaultFrameVZN = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Neue Hass Display;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplay.woff2");
  }
  @font-face {
    font-family: Neue Hass Display Med;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplayMedium.woff2");
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass Display;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplayBold.woff2");
    font-weight: bold;
  }
  @font-face {
    font-family: Neue Hass;
    src: url("/public/fonts/vz/NeueHaasGroteskText.woff2");
  }
  @font-face {
    font-family: Neue Hass Med;
    src: url("/public/fonts/vz/NeueHaasGroteskTextMedium.woff2");
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass;
    src: url("/public/fonts/vz/NeueHaasGroteskTextBold.woff2");
    font-weight: bold;
  }
`;

const OnePlanHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #f2f2f2;

  h1 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #cd040b;
    font-size: 4em;
    line-height: 1em;
    text-align: center;
  }
  h2 {
    margin: 0;
    padding: 12px 00;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 24px auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #cd040b;
  }
  h6 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 0.625em;
    line-height: 1.2;
    letter-spacing: -0.025em;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 24px 0;
      font-size: 2em;
      color: #cd040b;
      border-radius: 0;
      background: transparent;
    }
  }
`;

const OnePlanGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 64px;
  padding: 4%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const OnePlanGridItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 175px;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.6em;
    line-height: 1em;
    color: #cd040b;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    text-align: center;
  }
  img {
    position: absolute;
    z-index: 2;
    bottom: 44px;
    right: 0px;
    width: 44px;
    height: auto;
    @media (min-width: 768px) {
      width: 50px;
    }
  }
`;

const GridItemSize = styled.div`
  position: relative;
  display: block;
  width: 115px;
  height: 115px;
  margin: 0px auto;
  padding-top: 25px;
  color: #000000;
  text-align: center;
  font-size: 3em;
  font-weight: 700;
  font-family: "Haas Text Bold", "Open Sans", Helvetica, Arial, sans-serif;
  background: #abe0f9 none repeat scroll 0% 0%;
  border-radius: 50%;
`;

const PromoBanner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  h2 {
    margin: 0;
    padding: 12px 00;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1em;
    font-weight: normal;
    strong {
      color: #cd040b;
    }
  }
  h5 {
    margin: 0;
    padding: 4px 0 0 0;
    font-size: 1.2em;
    line-height: 1.4em;
    color: #000000;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    font-weight: normal;
  }
`;

const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 12px 4%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PromoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #f2f2f2;
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #cd040b;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #cd040b;
      border-radius: 0;
      background: transparent;
    }
  }
`;

export default function OnePlan() {
  return (
    <DefaultFrameVZN>
      <HeaderVZN />
      <OnePlanHero>
        <h1>One plan.</h1>
        <h1>Pick a size.</h1>
        <h1>Simple.</h1>
        <h2>Introducing XXL. 18GB&nbsp;/&nbsp;$100.</h2>
        <OnePlanGrid>
          <OnePlanGridItem>
            <img src='/public/images/vz/xxl-img/cone_s.png' border='0' />
            <GridItemSize>S</GridItemSize>
            <h5>1GB&nbsp;/&nbsp;$30</h5>
          </OnePlanGridItem>
          <OnePlanGridItem>
            <img src='/public/images/vz/xxl-img/cone_m.png' border='0' />
            <GridItemSize>M</GridItemSize>
            <h5>3GB&nbsp;/&nbsp;$45</h5>
          </OnePlanGridItem>
          <OnePlanGridItem>
            <img src='/public/images/vz/xxl-img/cone_l.png' border='0' />
            <GridItemSize>L</GridItemSize>
            <h5>6GB&nbsp;/&nbsp;$60</h5>
          </OnePlanGridItem>
          <OnePlanGridItem>
            <img src='/public/images/vz/xxl-img/cone_xl.png' border='0' />
            <GridItemSize>XL</GridItemSize>
            <h5>12GB&nbsp;/&nbsp;$80</h5>
          </OnePlanGridItem>
          <OnePlanGridItem>
            <img src='/public/images/vz/xxl-img/cone_xxl.png' border='0' />
            <GridItemSize>XXL</GridItemSize>
            <h5>18GB&nbsp;/&nbsp;$100</h5>
          </OnePlanGridItem>
        </OnePlanGrid>
        <h3>
          <strong>All sizes include unlimited talk and text.</strong>
        </h3>
        <h3>Call now and find your plan!</h3>
        <h4>(800)-555-1234</h4>
        <h6>
          Plan cost per month plus $20/month/smartphone purchased on device
          payment. Taxes/fees apply.
        </h6>
      </OnePlanHero>
      <PromoBanner>
        <h2>What else do you get?</h2>
        <PromoGrid>
          <div>
            <h3>
              <strong>Share Data.</strong>
            </h3>
            <h5>Share your data with family and across your devices.</h5>
          </div>
          <div>
            <h3>
              <strong>Switch sizes anytime.</strong>
            </h3>
            <h5>
              If you need more data, you can switch sizes any time. And if you’d
              rather not switch, each extra GB is only $15.Share your data with
              family and across your devices.
            </h5>
          </div>
          <div>
            <h3>
              <strong>All on the best network.</strong>
            </h3>
            <h5>
              Enjoy the largest and most reliable 4G LTE network in the country.
              More coverage, faster speeds and better connection.
            </h5>
          </div>
        </PromoGrid>
      </PromoBanner>
      <PromoFooter>
        <h3>Call now and find your plan!</h3>
        <h4>(800)-555-1234</h4>
      </PromoFooter>
    </DefaultFrameVZN>
  );
}
