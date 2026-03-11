import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerTMO from "./TMbanner";

import Tuesday from "../../projects/Tuesdays/Tuesdays";

export default function TMtuesday() {
  const crumbs = [
    {
      text: "T-Mobile",
      url: "/T-Mobile",
    },
    {
      text: "Tuesdays",
      url: "/T-Mobile/Tuesdays",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerTMO />
      <Article>
        <Copy title='T-Mobile Tuesdays'>
          <b>Front End Developer</b>
          <br />
          The T-Mobile Tuesdays click to call landing page campaign was part of
          T-Mobile's 11th Un-Carrier initiative <b>#GetThanked</b> in which they
          announced the T-Mobile Tuesdays app. The app "thanked" T-Mobile
          customers with free stuff and prizes from Gilt, Domino's, StubHub,
          Wendy's, VUDU, Fandango, Legendary Pictures and Universal Pictures,
          Lyft and more. In addition, the campaign introduced Stock Up, a
          program that offered a full share of T-Mobile US (TMUS) common stock
          to existing and new customers. Customers could also grow their
          ownership up to 100 shares a year by referring new customers to
          T-Mobile.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <Tuesday />
        </Viewport>
      </Article>
    </>
  );
}
