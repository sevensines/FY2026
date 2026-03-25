import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import ExpertEN from "../../projects/ExpertZone/ExpertEN";
import ExpertJA from "../../projects/ExpertZone/ExpertJA";

import expLogo from "../../assets/ms/xpz.svg";

export default function ExpertZone() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Expert Zone",
      url: "/Microsoft/ExpertZone",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo={expLogo} alt='Expert Zone' />
      <Article fadeOnly>
        <Copy title='Expert Zone Newsletter • United States & Japan'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          The Expert Zone Newsletter is a promotional publication that helps
          global retail professionals who sell Windows Phone, Windows, Xbox,
          Office and all other Microsoft products stay informed on the latest
          Microsoft products, features, events, and community activities.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <ExpertEN />
          <br />
          <ExpertJA />
        </Viewport>
      </Article>
    </>
  );
}
