import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import Jump from "../../projects/Jump/Jump";

import tmoLogo from "../../assets/tm/tmo.svg";

export default function TMjump() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Jump",
      url: "/T-Mobile/Jump",
    },
  ];

  return (
    <>
      <Banner logo={tmoLogo} alt='T-Mobile' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='JUMP! On Demand'>
          <b>Front End Developer</b>
          <br />
          The JUMP! On Demand click to call landing page campaign was part of
          T-Mobile's introduction of JUMP!, an on-demand service for customers
          to swap old smartphones for a new smartphone up to 3x per year with
          zero upfront costs and zero upgrade charges.
        </Copy>
        <br />
        <Viewport>
          <Jump />
        </Viewport>
      </Article>
    </>
  );
}
