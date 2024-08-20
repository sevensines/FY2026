import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PayGo from "../../projects/PayGo/PayGo";

import tmoLogo from "../../assets/tm/tmo.svg";

export default function TMpay() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Pay As You Go",
      url: "/T-Mobile/Pay",
    },
  ];

  return (
    <>
      <Banner logo={tmoLogo} alt='T-Mobile' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Pay As You Go'>
          <b>Front End Developer</b>
          <br />
          The Pay As You Go click to call landing page campaign was part of
          T-Mobile's prepaid pay as you go plans which offered no annual
          contract, no credit check, no deposit, and nationwide coverage. The
          campaign also offered high-speed data passes with daily and weekly
          rates for streaming and downloading at 4G LTE. Passes also included
          Smartphone Mobile HotSpot.
        </Copy>
        <br />
        <Viewport>
          <PayGo />
        </Viewport>
      </Article>
    </>
  );
}
