import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";

import adtLogo from "../../assets/ad/adt.svg";
import adtBG from "../../assets/ad/adt-tile-clr.jpg";
import adtBiz from "../../assets/ad/adt-bus.jpg";
import adtMove from "../../assets/ad/adt-mvr.jpg";

export default function ADT() {
  const crumbs = [
    {
      text: "ADT",
      url: "/ADT",
    },
  ];

  return (
    <>
      <Banner logo={adtLogo} alt='ADT' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='ADT'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          ADT Security Services is an American corporation that provides
          residential and small business electronic security, fire protection
          and other related alarm monitoring services in 35 countries. ADT is
          the largest security company in the United States and Canada, serving
          over 6.5 million customers. As of 2013 ADT holds 25% market share of
          the residential market and 13% of the small business market in the US.
        </Copy>
        <br />
        <TileList className='_three'>
          <TileText title='Business' link='/ADT/Business' bg={adtBiz} />
          <TileText title='Residential' link='/ADT/Residential' bg={adtBG} />
          {/* <TileText title='New Customers' link='/ADT/Specials' bg={adtMove} /> */}
        </TileList>
      </Article>
    </>
  );
}
