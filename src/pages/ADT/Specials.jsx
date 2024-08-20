import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";

import adtLogo from "../../assets/ad/adt.svg";

export default function Specials() {
  const crumbs = [
    {
      text: "ADT",
      url: "/ADT",
    },
    {
      text: "Specials",
      url: "/ADT/Specials",
    },
  ];

  return (
    <>
      <Banner logo={adtLogo} alt='ADT' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Movers Special Offer'>
          <b>Front End Developer</b>
          <br />
          The Movers Special Offer click to call landing page campaign was part
          of ADT's special offer for new residential customers featuring a
          variety surveillance and monitoring products with installation at a
          discounted price when customers sign up for a 3yr. contract. The page
          also featured a quote form which customers could complete to be
          contacted by an ADT Representative for pricing options.
        </Copy>
        <br />
        <Viewport>SPECIALS</Viewport>
      </Article>
    </>
  );
}
