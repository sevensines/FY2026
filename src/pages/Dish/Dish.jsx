import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import PriceLock from "../../projects/PriceLock/PriceLock";

import dshLogo from "../../assets/ds/dsh.svg";

export default function Dish() {
  const crumbs = [
    {
      text: "Dish",
      url: "/Dish",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo={dshLogo} alt='Dish' />
      <Article>
        <Copy title='2 Year Price Lock'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The 2 Year Price Lock click to call landing page campaign was part of
          Dish Network's special offer in which new customer could lock in
          pricing on entertainment bundles for 2 years. Offer also included free
          installation and a special 1 year subscription to the streaming
          service Netflix or the NFL Network Multi-Sport Pack - Red Zone.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <PriceLock />
        </Viewport>
      </Article>
    </>
  );
}
