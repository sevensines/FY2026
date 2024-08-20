import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import OnePlan from "../../projects/XXL/OnePlan";

import vznLogo from "../../assets/vz/vzn.svg";

export default function Verizon() {
  const crumbs = [
    {
      text: "Verizon",
      url: "/Verizon",
    },
  ];

  return (
    <>
      <Banner logo={vznLogo} alt='Verizon' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Introducing XXL'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The XXL click to call landing page campaign was part of Verizon's
          introduction of a 5th data pricing option to simple size plans. All
          sizes included unlimited talk and text with varying amounts of data at
          varying price points. Also included was cross-device data sharing, the
          ability to switch between plans, and full nationwide coverage.
        </Copy>
        <br />
        <Viewport>
          <OnePlan />
        </Viewport>
      </Article>
    </>
  );
}
