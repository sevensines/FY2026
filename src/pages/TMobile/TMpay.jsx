import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PayGo from "../../projects/PayGo/PayGo";
import BannerTMO from "./TMbanner";

export default function TMpay() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Pay As You Go",
      url: "/T-Mobile/Pay",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerTMO fixedLogo />
      <Article fadeOnly>
        <Copy title='Pay As You Go'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The Pay As You Go click to call landing page campaign was part of
          T-Mobile's prepaid pay as you go plans which offered no annual
          contract, no credit check, no deposit, and nationwide coverage. The
          campaign also offered high-speed data passes with daily and weekly
          rates for streaming and downloading at 4G LTE. Passes also included
          Smartphone Mobile HotSpot.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <PayGo />
        </Viewport>
      </Article>
    </>
  );
}
