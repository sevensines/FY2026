import BannerADT from "./ADTBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import ResidentialADT from "../../projects/ADTSecurity/Residential";

export default function Residential() {
  const crumbs = [
    {
      text: "ADT",
      url: "/ADT",
    },
    {
      text: "Residential",
      url: "/ADT/Residential",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerADT />
      <Article>
        <Copy title='Residential Surveillance'>
          <b>Front End Developer</b>
          <br />
          The Residential Surveillance click to call landing page campaign was
          part of ADT's special offer for residential and home surveillance
          featuring a variety surveillance and monitoring products with
          installation at a discounted price when new customers sign up for a
          3yr. contract. The page also featured a quote form which customers
          could complete to be contacted by an ADT Representative for pricing
          options.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <ResidentialADT />
        </Viewport>
      </Article>
    </>
  );
}
