import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";

import azrHome from "../../assets/ms/azr-homepage-enus.jpg";
import azrWebinar from "../../assets/ms/azr-webinar-enus.jpg";
import azrPivot from "../../assets/ms/azr-pivot-enus.jpg";
import azrLogo from "../../assets/ms/azr.svg";

export default function Essentials() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Azure",
      url: "/Microsoft/Azure",
    },
    {
      text: "Essentials",
      url: "/Microsoft/Azure/Essentials",
    },
  ];

  return (
    <>
      <Banner logo={azrLogo} alt='Microsoft' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Azure Essentials'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The Microsoft Azure Essentials campaign is a full scale website aimed
          at onboarding new and veteran developers to the Azure Web Services
          platform. Through Azure Essentials users have access to informational
          materials on Azure technologies, free self-paced courses, hands-on
          demos, learning resources for Azure certifications, live and recorded
          webinars, and ebooks. This campaign was launched globally, localized
          into 32 languages, and has seen over 1 million subscribers since
          launch.
        </Copy>
        <br />
        <Viewport>
          <div>
            <img src={azrHome} width='100%' height='auto' />
          </div>
          <div>
            <img src={azrWebinar} width='100%' height='auto' />
          </div>
          <div>
            <img src={azrPivot} width='100%' height='auto' />
          </div>
        </Viewport>
      </Article>
    </>
  );
}
