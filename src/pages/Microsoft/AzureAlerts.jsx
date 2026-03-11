import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerAZR from "./AzrBanner";

import AzureAlertEn from "../../projects/Alerts2016/AzureAlertEn";
import AzureAlertDE from "../../projects/Alerts2016/AzureAlertDe";
import AzureAlertJA from "../../projects/Alerts2016/AzureAlertJa";

export default function AzureAlerts() {
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
      text: "Service Alerts",
      url: "/Microsoft/Azure/Alerts",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerAZR />
      <Article>
        <Copy title='Azure Service Alerts • Global'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          Azure Service Alerts are email notifications that keep global Azure
          subscribers informed on the latest Azure features, updates, outages,
          and migrations. These service communications are delivered globally
          and are localized into 44 languages.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <>
            <AzureAlertEn />
            <br />
            <AzureAlertDE />
            <br />
            <AzureAlertJA />
          </>
        </Viewport>
      </Article>
    </>
  );
}
