import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import Tile from "../../components/TileGrid/Tile";
import { MICROSOFT } from "../../data.js";

import msLogo from "../../assets/ms/mic.svg";

export default function Microsoft() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo={msLogo} alt='Microsoft' />
      <Article>
        <Copy title='Microsoft'>
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
          {MICROSOFT.map((item) => (
            <Tile
              key={item.title}
              title={item.title}
              link={item.url}
              logo={item.logo}
              bg={item.bg}
              sgl={item.sgl}
              role={item.role}
            />
          ))}
        </TileList>
      </Article>
    </>
  );
}
