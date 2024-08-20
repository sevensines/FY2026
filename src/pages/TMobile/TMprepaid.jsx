import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PrePaid from "../../projects/Prepaid/Prepaid";

import tmoLogo from "../../assets/tm/tmo.svg";

export default function TMprepaid() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Simply Prepaid",
      url: "/T-Mobile/Prepaid",
    },
  ];

  return (
    <>
      <Banner logo={tmoLogo} alt='T-Mobile' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Simply Prepaid'>
          <b>Front End Developer</b>
          <br />
          The Simply Prepaid click to call landing page campaign was part of
          T-Mobile's Simply Prepaid announcement offering 3 monthly prepaid
          options for umlimited talk, text, and data packages. The offer also
          included the option to bring your own device without an annual service
          contract or credit check.
        </Copy>
        <br />
        <Viewport>
          <PrePaid />
        </Viewport>
      </Article>
    </>
  );
}
