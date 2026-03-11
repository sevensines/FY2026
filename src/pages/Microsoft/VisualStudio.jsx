import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import Kanban from "../../projects/VisualStudio/Kanban";

import vstLogo from "../../assets/ms/vst.svg";

export default function VisualStudio() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Visual Studio",
      url: "/Microsoft/VisualStudio",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo={vstLogo} alt='Visual Studio' />
      <Article>
        <Copy title='Visual Studio Promotions'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          Microsoft Visual Studio is an integrated development environment (IDE)
          from Microsoft. It is used to develop computer programs for Microsoft
          Windows, as well as web sites, web applications and web services. The
          Visual Studio promotional email campaigns are digital publications
          that help subscribers stay informed on the latest Visual Studio
          products, features, events, and community activities.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <Kanban />
        </Viewport>
      </Article>
    </>
  );
}
