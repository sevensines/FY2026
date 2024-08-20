import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";

import azrLogo from "../../assets/ms/azr.svg";
import azureBG from "../../assets/ms/mic-ess.jpg";
import newsBG from "../../assets/ms/mic-nws.jpg";
import servBG from "../../assets/ms/mic-srv.jpg";

export default function Azure() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Azure",
      url: "/Microsoft/Azure",
    },
  ];

  return (
    <>
      <Banner logo={azrLogo} alt='Microsoft Azure' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Azure'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          Microsoft Azure is a cloud computing platform and infrastructure
          created by Microsoft for building, deploying, and managing
          applications and services through a global network of
          Microsoft-managed data centers. It provides both PaaS and IaaS
          services and supports many different programming languages, tools and
          frameworks, including both Microsoft-specific and third-party software
          and systems.
        </Copy>
        <br />
        <TileList className='_three'>
          <TileText
            title='Azure Essentials'
            link='/Microsoft/Azure/Essentials'
            bg={azureBG}
          />
          <TileText
            title='Newsletter'
            link='/Microsoft/Azure/Newsletter'
            bg={newsBG}
          />
          <TileText
            title='Service Alerts'
            link='/Microsoft/Azure/Alerts'
            bg={servBG}
          />
        </TileList>
      </Article>
    </>
  );
}
