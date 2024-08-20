import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import Tile from "../../components/TileGrid/Tile";

import msLogo from "../../assets/ms/mic.svg";
import azrLogo from "../../assets/ms/azr.svg";
import azrThumb from "../../assets/ms/mic-tile-clr.jpg";
import stuLogo from "../../assets/ms/stu.svg";
import stuThumb from "../../assets/ms/mic-stu.jpg";
import tenLogo from "../../assets/ms/ten.svg";
import tenThumb from "../../assets/ms/mic-win.jpg";
import xpzLogo from "../../assets/ms/xpz.svg";
import xpzThumb from "../../assets/ms/mic-exp.jpg";
import pbiLogo from "../../assets/ms/pbi.svg";
import pbiThumb from "../../assets/ms/mic-pow.jpg";
import vstLogo from "../../assets/ms/vst.svg";
import vstThumb from "../../assets/ms/mic-vis.jpg";

export default function Microsoft() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
  ];

  return (
    <>
      <Banner logo={msLogo} alt='Microsoft' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Microsoft'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          Microsoft is an American multinational technology company that
          develops, manufactures, licenses, supports and sells computer
          software, consumer electronics and personal computers and services.
          Its best known software products are the Microsoft Windows line of
          operating systems, Microsoft Office office suite, and Internet
          Explorer and Edge web browsers. Its flagship hardware products are the
          Xbox video game consoles and the Microsoft Surface tablet lineup. As
          of 2011, it was the world's largest software maker by revenue, and one
          of the world's most valuable companies.
        </Copy>
        <br />
        <TileList className='_three'>
          <Tile
            title='Microsoft Azure'
            link='/Microsoft/Azure'
            logo={azrLogo}
            bg={azrThumb}
          />
          <Tile
            title='Microsoft Student'
            link='/Microsoft/Student'
            logo={stuLogo}
            bg={stuThumb}
          />
          <Tile
            title='Windows 10'
            link='/Microsoft/Windows10'
            logo={tenLogo}
            bg={tenThumb}
          />
          <Tile
            title='Expert Zone'
            link='/Microsoft/ExpertZone'
            logo={xpzLogo}
            bg={xpzThumb}
          />
          <Tile
            title='Power BI'
            link='/Microsoft/PowerBI'
            logo={pbiLogo}
            bg={pbiThumb}
          />
          <Tile
            title='Visual Studio'
            link='/Microsoft/VisualStudio'
            logo={vstLogo}
            bg={vstThumb}
          />
        </TileList>
      </Article>
    </>
  );
}
