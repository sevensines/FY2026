import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerGTS from "./GTSBanner";

export default function GivingPledge() {
  const crumbs = [
    {
      text: "Gates",
      url: "/Gates",
    },
    {
      text: "The Giving Pledge",
      url: "/Gates/GivingPledge",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerGTS fixedLogo />
      <Article>
        <Copy title='The Giving Pledge'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          <a
            href='https://givingpledge.org/'
            title='The Giving Pledge'
            aria-label='Link: The Giving Pledge'
          >
            The Giving Pledge
          </a>{" "}
          site wide redesign and rebuild was part of a campaign to encourage
          wealthy people to contribute a majority of their wealth to
          philanthropic causes. As of 2018, the pledge has 173 signers, either
          individuals or couples. Most of the signers of the pledge are
          billionaires, and their pledges total over $365 billion. On The Giving
          Pledge's website, each individual or couple writes a letter explaining
          why they chose to give.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <div>
            <img
              src='/public/images/gt/gates_landing.jpg'
              width='100%'
              height='auto'
            />
          </div>
          <div>
            <img
              src='/public/images/gt/gates_letter.jpg'
              width='100%'
              height='auto'
            />
          </div>
          <div>
            <img
              src='/public/images/gt/gates_learning.jpg'
              width='100%'
              height='auto'
            />
          </div>
          <div>
            <img
              src='/public/images/gt/gates_history.jpg'
              width='100%'
              height='auto'
            />
          </div>
        </Viewport>
      </Article>
    </>
  );
}
