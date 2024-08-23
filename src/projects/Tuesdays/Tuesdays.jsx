import styled from "styled-components";
import HeaderTMO from "../../pages/TMobile/TMheader";
import FrameTMO from "../../pages/TMobile/TMframe";

import tmoKhaled from "../../assets/tm/tue-img/hero.png";
import tmoFree from "../../assets/tm/tue-img/tmo-freetuesdays.svg";
import tmoDomino from "../../assets/tm/tue-img/tmo-dominos.svg";
import tmoVudu from "../../assets/tm/tue-img/tmo-vudu.svg";
import tmoWendys from "../../assets/tm/tue-img/tmo-wendys.svg";
import tmoGraph from "../../assets/tm/tue-img/tmo-graph.svg";
import tmoStockup from "../../assets/tm/tue-img/tmo-stockup.svg";

const KhaledHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

const ColumnLeft = styled.div`
  width: 180px;
  height: 164px;
  background: url(${tmoKhaled}) no-repeat top center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 1;
    width: 100%;
    height: auto;
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  img {
    width: 60%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    line-height: 1em;
    color: #e20074;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding-top: 5px;
    color: #444444;
    font-family: swis721 roman, "swis721 roman", "open sans", helvetica, arial,
      sans-serif;
    font-size: 1.15em;
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
  p {
    color: #666666;
    font-size: 55%;
    text-align: center;
  }

  @media (min-width: 768px) {
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

const FreeStuff = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: 0px auto;
  padding: 2%;
  background: rgb(242, 242, 242);
`;

const FreeSubTitle = styled.div`
  width: fit-content;
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 2%;
  font-size: 1.3em;
  font-family: "swis721 bold", helvetica, arial, sans-serif;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  background: #000000;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 2.2em;
    line-height: 1;
  }
`;

const FreeSubCopy = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 1em;
  font-family: "swis721 roman", helvetica, arial, sans-serif;
  color: #575757;
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const FreeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FreeGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.8em;
    line-height: 1;
    color: #444444;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 3em;
    line-height: 1;
    color: #e20074;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1;
    color: #444444;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  img {
    width: 120px;
    height: 120px;
  }
`;

const FreeCta = styled.div`
  padding-top: 20px;
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
  @media (min-width: 768px) {
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

const StockUp = styled.div`
  display: flex;
  width: 100%;
  height: 360px;
  flex-direction: column;
  align-items: stretch;
  margin: 0px auto;
  padding: 2% 0 0 0;
  background: rgb(238, 238, 238);
  @media (min-width: 768px) {
    height: 540px;
  }
`;

const StockSubTitle = styled.div`
  width: fit-content;
  height: auto;
  text-align: center;
  margin: 12px;
  padding: 2%;
  font-size: 1.1em;
  font-family: "swis721 bold", helvetica, arial, sans-serif;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  background: #000000;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 1.8em;
    line-height: 1;
  }
`;

const StockSubContainer = styled.div`
  flex: 1;
  background: url(${tmoGraph}) no-repeat center bottom;
  background-size: contain;

  div:nth-child(1) {
    margin: 12px 12px 12px 10%;
  }
  div:nth-child(2) {
    margin: 12px 12px 12px 20%;
  }
  div:nth-child(3) {
    margin: 12px 12px 12px 6%;
    background: #e20074;
  }
  div:nth-child(4) {
    margin: 12px 12px 12px 12%;
    background: #e20074;
  }
`;

const StockCopyContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 4% 4% 4%;
  background: #e20074;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StockLeft = styled.div`
  flex: 1;
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
  p {
    font-size: 1.2em;
    line-height: 1.3em;
    font-family: swis721 roman, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      text-align: left;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`;

const StockRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  h5 {
    margin: 16px 0 0 0;
    padding: 0;
    font-size: 1.6em;
    text-align: center;
    font-family: swis721 bold, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
  }
  p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
    font-family: swis721 roman, "swis721 bold", "open sans", helvetica, arial,
      sans-serif;
  }

  img {
    align-self: center;
    width: 75%;
    height: auto;
  }
`;

export default function Tuesday() {
  return (
    <FrameTMO>
      <HeaderTMO />
      <KhaledHero>
        <ColumnLeft />
        <ColumnRight>
          <h2>SIGN UP FOR A T-MOBILE PLAN AND GET FREE STUFF. EVERY WEEK.</h2>
          <img
            src={tmoFree}
            alt='Introducing T-Mobile Tuesdays. Free Stuff. Every Week.'
          />
          <h3>
            Plus, Get Thanked with a share of Un-carrier&nbsp;stock.
            <br />
            Just for being a customer.
          </h3>
          <br />
          <h4>
            <span>Call now!&nbsp;</span>
            (800)-555-1234
          </h4>
          <br />
          <p>
            Qualifying plan req'd. For best experience use App. Obtain
            prospectus by calling toll free 1-855-256-9253 or visiting
            <u>http://www.t-mobile.com/prospectus</u>.
          </p>
        </ColumnRight>
      </KhaledHero>
      <FreeStuff>
        <FreeSubTitle>Get Free Stuff Every Tuesday</FreeSubTitle>
        <FreeSubCopy>
          Just for being a customer. No hoops. No strings.
        </FreeSubCopy>
        <FreeGrid>
          <FreeGridItem>
            <h3>Free</h3>
            <h4>Pizza</h4>
            <img src={tmoDomino} border='0' alt="Domino's Pizza" />
            <h5>A Medium 2 Topping Pizza</h5>
          </FreeGridItem>
          <FreeGridItem>
            <h3>Free</h3>
            <h4>Movies</h4>
            <img src={tmoVudu} border='0' alt='Vudu' />
            <h5>A Movie with Vudu</h5>
          </FreeGridItem>
          <FreeGridItem>
            <h3>Free</h3>
            <h4>Treats</h4>
            <img src={tmoWendys} border='0' alt="Wendy's" />
            <h5>A Wendy's Frosty</h5>
          </FreeGridItem>
        </FreeGrid>
        <FreeCta>
          <h4>
            <span>Call now!&nbsp;</span>
            (800)-555-1234
          </h4>
        </FreeCta>
      </FreeStuff>
      <StockUp>
        <StockSubContainer>
          <StockSubTitle>We're also making you</StockSubTitle>
          <StockSubTitle>an owner of the compnay</StockSubTitle>
          <StockSubTitle>Get your share of</StockSubTitle>
          <StockSubTitle>Un-Carrier Stock</StockSubTitle>
        </StockSubContainer>
      </StockUp>
      <StockCopyContainer>
        <StockLeft>
          <p>
            You’re more than just a customer to us. So we’re giving you the
            biggest thanking of all by making you an owner in the Un-carrier
            with a share of the company.
            <br />
            <br />
            Sign up with T-Mobile today and claim your free share of stock.
            Shares will be available in the app within 3 weeks of joining
            T‑Mobile.
          </p>
          <h4>
            <span>Call now!&nbsp;</span>
            (800)-555-1234
          </h4>
        </StockLeft>
        <StockRight>
          <img src={tmoStockup} />
          <h5>REFER A FRIEND FOR EVEN MORE SHARES</h5>
          <p>
            Increase your ownership stake with a share of stock for every friend
            or family member you bring to T‑Mobile.
          </p>
        </StockRight>
      </StockCopyContainer>
    </FrameTMO>
  );
}
