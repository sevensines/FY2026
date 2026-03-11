import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import { TileList } from "../../components/TileGrid/TileGrid";
import TileText from "../../components/TileGrid/TileText";
import BannerADT from "./ADTBanner";
import { ADTSECURITY } from "../../data";

export default function ADT() {
  const crumbs = [
    {
      text: "ADT",
      url: "/ADT",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerADT />
      <Article>
        <Copy title='ADT'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          ADT Security Services is an American corporation that provides
          residential and small business electronic security, fire protection
          and other related alarm monitoring services in 35 countries. ADT is
          the largest security company in the United States and Canada, serving
          over 6.5 million customers. As of 2013 ADT holds 25% market share of
          the residential market and 13% of the small business market in the US.
        </Copy>
        <br />
        <TileList className='_three'>
          {ADTSECURITY.map((item) => (
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
