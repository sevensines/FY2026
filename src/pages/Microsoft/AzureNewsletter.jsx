import React from "react";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerAZR from "./AzrBanner";
import AzureEnNewsletter from "../../projects/News2016/AzureNewsEn";
import AzureJaNewsletter from "../../projects/News2016/AzureNewsJa";

export default function AzureNewsletter() {
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
      text: "Newsletter",
      url: "/Microsoft/Azure/Newsletter",
    },
  ];

  return (
    <>
      <BannerAZR />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Azure Newsletter • United States & Japan'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The Azure Newsletter is a monthly digital publication that helps
          subscribers in the United States and Japan stay informed on the latest
          Azure features, events, and community activities. It also features
          sponsored content from Partners and showcases success stories of major
          corporations using Azure.
        </Copy>
        <br />
        <Viewport>
          <>
            <AzureEnNewsletter />
            <AzureJaNewsletter />
          </>
        </Viewport>
      </Article>
    </>
  );
}
