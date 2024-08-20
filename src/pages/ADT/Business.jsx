import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";

import adtLogo from "../../assets/ad/adt.svg";

export default function Business() {
  const crumbs = [
    {
      text: "ADT",
      url: "/ADT",
    },
    {
      text: "Business",
      url: "/ADT/Business",
    },
  ];

  return (
    <>
      <Banner logo={adtLogo} alt='ADT' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Business Surveillance'>
          <b>Front End Developer</b>
          <br />
          The Business Surveillance click to call landing page campaign was part
          of ADT's special offer for small businesses featuring a variety
          surveillance and monitoring products with installation at a discounted
          price when new customers sign up for a 3yr. contract. The page also
          featured a quote form which customers could complete to be contacted
          by an ADT Representative for pricing options.
        </Copy>
        <br />
        <Viewport>BUSINESS</Viewport>
      </Article>
    </>
  );
}
