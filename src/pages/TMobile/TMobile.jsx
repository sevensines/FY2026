import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";

import tmoLogo from "../../assets/tm/tmo.svg";
import tmoTuesday from "../../assets/tm/tmo-tue.jpg";
import tmoThree from "../../assets/tm/tmo-341.jpg";
import tmoJump from "../../assets/tm/tmo-jmp.jpg";
import tmoPay from "../../assets/tm/tmo-pyg.jpg";
import tmoPrepaid from "../../assets/tm/tmo-pre.jpg";
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
      <Banner logo={tmoLogo} alt='T-Mobile' />
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
          <TileText
            title='Free Tuesdays'
            link='/T-Mobile/Tuesdays'
            bg={tmoTuesday}
          />
          <TileText title='3 for 1' link='/T-Mobile/3for1' bg={tmoThree} />
          <TileText title='Jump' link='/T-Mobile/Jump' bg={tmoJump} />
          <TileText title='Pay As You Go' link='/T-Mobile/Pay' bg={tmoPay} />
          <TileText title='Prepaid' link='/T-Mobile/Prepaid' bg={tmoPrepaid} />
          <TileText title='Data Stash' link='/T-Mobile/Stash' bg={tmoData} />
        </TileList>
      </Article>
    </>
  );
}
