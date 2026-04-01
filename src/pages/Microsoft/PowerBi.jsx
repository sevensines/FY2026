import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PowerBIApr from "../../projects/PowerBI2016/PowerBI-April";

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
      <Breadcrumb route={crumbs} />
      <Banner logo='/public/images/ms/pbi.svg' alt='Power BI' />
      <Article fadeOnly>
        <Copy title='Power BI Newsletter'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
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
        <Viewport viewSelected='desktop'>
          <PowerBIApr />
        </Viewport>
      </Article>
    </>
  );
}
