import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";

import gtsLogo from "../../assets/gt/gts.svg";
import gtsPledge from "../../assets/gt/gts-gvp.jpg";
import gtsLetter from "../../assets/gt/gts-ltr.jpg";

export default function Gates() {
  const crumbs = [
    {
      text: "The Gates Foundation",
      url: "/Gates",
    },
  ];

  return (
    <>
      <Banner logo={gtsLogo} alt='Gates Foundation' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='The Gates Foundation'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The Bill & Melinda Gates Foundation is a private foundation founded by
          Bill and Melinda Gates. It was launched in 2000 and is said to be the
          largest private foundation in the US. The primary aims of the
          foundation are to enhance healthcare and reduce extreme poverty
          globally and in America, to expand educational opportunities and
          access to information technology. The foundation, based in Seattle,
          Washington, is controlled by its three trustees: Bill and Melinda
          Gates, and Warren Buffett.
        </Copy>
        <br />
        <TileList className='_three'>
          <TileText
            title='The Giving Pledge'
            link='/Gates/GivingPledge'
            bg={gtsPledge}
          />
          <TileText
            title='Annual Letter'
            link='/Gates/AnnualLetter'
            bg={gtsLetter}
          />
        </TileList>
      </Article>
    </>
  );
}
