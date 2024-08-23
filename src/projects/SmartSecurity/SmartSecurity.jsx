import styled from "styled-components";
import attBold from "../../assets/at/fonts/omnesatt-medium.woff";
import attReg from "../../assets/at/fonts/omnesatt-regular.woff";
import attLight from "../../assets/at/fonts/omnesatt-light.woff";
import attLogo from "../../assets/at/att-img/att-logo.svg";
import attHouse from "../../assets/at/att-img/hero_outdoors.jpg";
import attWater from "../../assets/at/att-img/circle_water.png";
import attTileWater from "../../assets/at/att-img/icon_water.png";
import attFire from "../../assets/at/att-img/circle_fire.png";
import attTileFire from "../../assets/at/att-img/icon_security.png";
import attLock from "../../assets/at/att-img/circle_lock.png";
import attTileLock from "../../assets/at/att-img/icon_door.png";
import attRemote from "../../assets/at/att-img/circle_remote.png";
import attTileRemote from "../../assets/at/att-img/icon_alerts.png";
import attBulb from "../../assets/at/att-img/circle_bulb.png";
import attTileBulb from "../../assets/at/att-img/icon_panel.png";
import attCar from "../../assets/at/att-img/circle_garage.png";
import attTileCar from "../../assets/at/att-img/icon_program.png";
import attCamera from "../../assets/at/att-img/circle_video.png";
import attTileCamera from "../../assets/at/att-img/icon_monitor.png";
import attSeven from "../../assets/at/att-img/700.png";
import attTwelve from "../../assets/at/att-img/1200.png";
import attSeventeen from "../../assets/at/att-img/1700.png";

const DefaultFrameATT = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: ATT Bold;
    src: url(${attBold});
    font-weight: bold;
  }
  @font-face {
    font-family: ATT Regular;
    src: url(${attReg});
    font-weight: normal;
  }
  @font-face {
    font-family: ATT Light;
    src: url(${attLight});
    font-weight: light;
  }
`;

const AttHeader = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #f2f2f2;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const AttLogo = styled.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${attLogo}) no-repeat center;
  background-size: cover;
`;

const AttNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #009ede;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;

    span {
      color: #000000;
      font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
        sans-serif;
    }
  }
`;

const AttHero = styled.div`
  padding: 0 20px;
  background: linear-gradient(
    to bottom,
    rgba(254, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: url(${attHouse}) no-repeat center center;
  background-size: cover;
`;

const HeroIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const IconWater = styled(HeroIcon)`
  top: 82%;
  left: 10%;
  background: url(${attWater}) no-repeat center center;
  background-size: contain;
`;

const IconFire = styled(HeroIcon)`
  top: 43%;
  left: 26%;
  background: url(${attFire}) no-repeat center center;
  background-size: contain;
`;

const IconLock = styled(HeroIcon)`
  top: 64%;
  left: 40%;
  background: url(${attLock}) no-repeat center center;
  background-size: contain;
`;

const IconRemote = styled(HeroIcon)`
  top: 44%;
  left: 50%;
  background: url(${attRemote}) no-repeat center center;
  background-size: contain;
`;

const IconBulb = styled(HeroIcon)`
  top: 26%;
  left: 63%;
  background: url(${attBulb}) no-repeat center center;
  background-size: contain;
`;

const IconCar = styled(HeroIcon)`
  top: 68%;
  left: 68%;
  background: url(${attCar}) no-repeat center center;
  background-size: contain;
`;

const IconCamera = styled(HeroIcon)`
  top: 42%;
  left: 92%;
  background: url(${attCamera}) no-repeat center center;
  background-size: contain;
`;

const ProductGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    top: -42px;
    column-gap: 0px;
    row-gap: 0px;
    padding: 0 20px;
  }
  @media (min-width: 960px) {
    top: -62px;
  }
`;

const ProductTile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  img {
    display: none;
  }

  h5 {
    margin: 0;
    padding: 12px;
    color: #ffffff;
    font-size: 1em;
    line-height: 1em;
    font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
      sans-serif;
    text-align: center;
    background: #009ede;
  }
  @media (min-width: 768px) {
    min-width: 12%;
    padding: 0 12px;

    h5 {
      padding: 12px 0 0 0;
      color: #000000;
      background: transparent;
      font-size: 0.8em;
      line-height: 0.8em;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  @media (min-width: 960px) {
    min-width: 14%;
    h5 {
      font-size: 1em;
      line-height: 1em;
    }
  }
`;

const ProductPackages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;

  h2 {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
      sans-serif;
  }
  h6 {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
      sans-serif;
  }
`;

const PackageGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PackageItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 32px 20px;
  border: 1px solid #ccc;

  &:nth-child(1) {
    background: url(${attSeven}) no-repeat top right;
  }
  &:nth-child(2) {
    background: url(${attTwelve}) no-repeat top right;
  }
  &:nth-child(3) {
    background: url(${attSeventeen}) no-repeat top right;
  }

  h2 {
    padding: 12px 0 0 0;
    font-size: 4em;
    line-height: 1em;
    font-family: "ATT Bold", "Open Sans", Helvetica, Arial, sans-serif;
    color: #078cc5;
    text-align: center;
    sup {
      font-size: 0.4em;
      line-height: 0.6rem;
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1em;
    font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
      sans-serif;
    color: #000000;
    text-align: center;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.2em;
    line-height: 1em;
    font-family: "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial,
      sans-serif;
    color: #078cc5;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 12px 0 0 0;
    font-size: 1em;
    line-height: 1.2em;
    color: #000000;
    text-align: center;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3em;
    }
    h3 {
      font-size: 1.4em;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 4em;
    }
    h3 {
      font-size: 2em;
    }
  }
`;

const PromoFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #078cc5;
  h3 {
    margin: 0;
    padding: 0 0 12px 0;
    font-family: Neue Hass Text, helvetica, arial, sans-serif;
    color: #ffffff;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #078cc5;
    font-family: Neue Hass Display, helvetica, arial, sans-serif;
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

export default function SmartSecurity() {
  return (
    <DefaultFrameATT>
      <AttHeader>
        <AttLogo />
        <AttNumber>
          <h5>
            <span>Call for a quote </span>(800)-555-1234
          </h5>
        </AttNumber>
      </AttHeader>
      <AttHero>
        <HeroContainer>
          <IconWater />
          <IconFire />
          <IconLock />
          <IconRemote />
          <IconBulb />
          <IconCar />
          <IconCamera />
        </HeroContainer>
        <ProductGrid>
          <ProductTile>
            <img src={attTileWater} border='0' />
            <h5>
              Water
              <br />
              Detection*
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileFire} border='0' />
            <h5>
              Fire & CO2
              <br />
              Monitoring
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileLock} border='0' />
            <h5>
              Professional
              <br />
              Monitoring
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileRemote} border='0' />
            <h5>
              Text &
              <br />
              Email Alerts
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileBulb} border='0' />
            <h5>
              Lighting &
              <br />
              Thermostat
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileCar} border='0' />
            <h5>
              Remote
              <br />
              Access
            </h5>
          </ProductTile>
          <ProductTile>
            <img src={attTileCamera} border='0' />
            <h5>
              Video
              <br />
              Monitoring
            </h5>
          </ProductTile>
        </ProductGrid>
      </AttHero>
      <ProductPackages>
        <h2>
          AT&T Digital Life gives you a simple way to help you stay connected to
          your home when you're away. With three affordable packages, you pick
          the level of smart home security that's right for you.*
        </h2>
        <PackageGrid>
          <PackageItem>
            <h3>Smart Security Package</h3>
            <h2>
              <sup>$</sup>29.99
            </h2>
            <h4>includes $700 in equipment if purchased separately.</h4>
            <p>
              Home security with window and door sensors, a motion sensor and
              indoor siren.*
            </p>
          </PackageItem>
          <PackageItem>
            <h3>Smart Security and Automation Package</h3>
            <h2>
              <sup>$</sup>49.99
            </h2>
            <h4>includes $1,200 in equipment if purchased separately.</h4>
            <p>
              Get everything in the Smart Security package, plus an outdoor
              video camera package and remote access door lock package.*
            </p>
          </PackageItem>
          <PackageItem>
            <h3>Premium Security and Automation Package</h3>
            <h2>
              <sup>$</sup>99.99
            </h2>
            <h4>includes $1,700 in equipment if purchased separately.</h4>
            <p>
              Get everything in the Smart Security and Automation package plus
              energy package with thermostat and lighting control, and water
              detection package.*
            </p>
          </PackageItem>
        </PackageGrid>
        <h6>
          *Digital Life: Ltd avail. in select mkts. 2-year security agmt.
          w/equip fees and monthly svc charges req'd. Door lock,
          thermostat/lighting control, water detection and camera functions each
          req. purchase of sep. automation pkg. w/sep. equip. fees & monthly svc
          charges or security + automation package. AT&T-Certified Like-New
          equip. provided. Early termination (up to $840) and other fees, chgs
          and restr's apply. Data charges may apply for app download and usage.
          Coverage and service not avail. everywhere. See below for complete
          details.
        </h6>
      </ProductPackages>
      <PromoFooter>
        <h3>Discover how you can benefit from a smart home.</h3>
        <h4>(800)-555-1234</h4>
      </PromoFooter>
    </DefaultFrameATT>
  );
}
