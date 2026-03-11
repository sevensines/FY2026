import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import Button from "../../components/AnchorButton/AnchorButton";
import BannerGTS from "./GTSBanner";

import gtsLanding from "../../assets/gt/gates_landing.jpg";
import gtsLearning from "../../assets/gt/gates_learning.jpg";
import gtsLetter from "../../assets/gt/gates_letter.jpg";
import gtsHistory from "../../assets/gt/gates_history.jpg";

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
      <BannerGTS />
      <Article>
        <Copy title='The Giving Pledge'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          The Giving Pledge site wide redesign and rebuild was part of a
          campaign to encourage wealthy people to contribute a majority of their
          wealth to philanthropic causes. As of 2018, the pledge has 173
          signers, either individuals or couples. Most of the signers of the
          pledge are billionaires, and their pledges total over $365 billion. On
          The Giving Pledge's website, each individual or couple writes a letter
          explaining why they chose to give.
          <br />
          <br />
          <Button
            text='GivingPledge.org'
            url='https://givingpledge.org/'
            blank
          />
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <div>
            <img src={gtsLanding} width='100%' height='auto' />
          </div>
          <div>
            <img src={gtsLetter} width='100%' height='auto' />
          </div>
          <div>
            <img src={gtsLearning} width='100%' height='auto' />
          </div>
          <div>
            <img src={gtsHistory} width='100%' height='auto' />
          </div>
        </Viewport>
      </Article>
    </>
  );
}
