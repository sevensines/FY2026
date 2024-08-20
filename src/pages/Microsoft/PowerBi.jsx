import React from "react";
import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PowerBIApr from "../../projects/PowerBI2016/PowerBI-April";

import pbiLogo from "../../assets/ms/pbi.svg";

export default function PowerBI() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Power BI",
      url: "/Microsoft/PowerBI",
    },
  ];

  return (
    <>
      <Banner logo={pbiLogo} alt='Power BI' />
      <Article>
        <Breadcrumb route={crumbs} />
        <Copy title='Power BI Newsletter'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          Power BI is a cloud-based business analytics service that enables
          anyone to visualize and analyze data with greater speed, efficiency,
          and understanding. It connects users to a broad range of data through
          easy-to-use dashboards, interactive reports, and compelling
          visualizations that bring data to life. The Power BI Newsletter is a
          monthly digital publication that helps subscribers stay informed on
          the latest Power BI features, events, and community activities.
        </Copy>
        <br />
        <Viewport>
          <PowerBIApr />
        </Viewport>
      </Article>
    </>
  );
}
