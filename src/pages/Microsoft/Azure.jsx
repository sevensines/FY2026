import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";
import BannerAZR from "./AzrBanner";
import { AZURE } from "../../data";

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
      <Breadcrumb route={crumbs} />
      <BannerAZR />
      <Article>
        <Copy title='Azure'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
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
          {AZURE.map((item) => (
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
