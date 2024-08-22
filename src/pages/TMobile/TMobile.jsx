import React from "react";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";
import BannerTMO from "./TMbanner";
import { TMOBILE } from "../../data";

import tmoData from "../../assets/tm/tmo-dat.jpg";

export default function TMobile() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
  ];

  return (
    <>
      <BannerTMO />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='T-Mobile'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          T-Mobile US provides wireless voice, messaging, and data services in
          the United States, Puerto Rico and the U.S. Virgin Islands. The
          company operates the third largest wireless network in the U.S. market
          with over 65.5 million customers. Its nationwide network reaches 98
          percent of Americans. As of 2011, J. D. Power and Associates, a global
          marketing-information-services firm, ranked the company highest among
          major wireless carriers for retail-store satisfaction four years
          consecutively and highest for wireless customer care two years
          consecutively.
        </Copy>
        <br />
        <TileList className='_three'>
          {TMOBILE.map((item) => (
            <TileText
              key={item.title}
              link={item.url}
              title={item.title}
              bg={item.bg}
            />
          ))}
        </TileList>
      </Article>
    </>
  );
}
