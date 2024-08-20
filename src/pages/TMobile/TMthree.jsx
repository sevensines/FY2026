import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import ThreeForOne from "../../projects/ThreeForOne/ThreeForOne";

import tmoLogo from "../../assets/tm/tmo.svg";

export default function TMthree() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Tuesdays",
      url: "/T-Mobile/3for1",
    },
  ];

  return (
    <>
      <Banner logo={tmoLogo} alt='T-Mobile' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='3 Countries for the Price of 1'>
          <b>Front End Developer</b>
          <br />
          The 3 Countries for the Price of 1 click to call landing page campaign
          was part of T-Mobile's Simple Choice announcement. T-Mobile had
          expanded its coverage. Unlimited calling in the U.S., Mexico, and
          Canada was now is automatically included with our new Simple Choice
          plans. This also included 4G LTE data and unlimited talk and text in
          either country at no extra charge.
        </Copy>
        <br />
        <Viewport>
          <ThreeForOne />
        </Viewport>
      </Article>
    </>
  );
}
