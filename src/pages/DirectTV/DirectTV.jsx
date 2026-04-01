import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import ChoicePackage from "../../projects/ChoicePackage/ChoicePackage";

export default function DirectTV() {
  const crumbs = [
    {
      text: "DirecTV",
      url: "/DirecTV",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo='/public/images/dt/dtv.svg' alt='DirectTV' />
      <Article>
        <Copy title='DirecTV NFL & Choice Package'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The Directv NFL & Choice Package click to call landing page campaign
          was part of DIRECTV's Choice Package for new customers which included
          3 free months of HBO, STARZ, SHOWTIME and Cinemax. The 2016 NFL Sunday
          Ticket, which inlcuded every Out-of-Market NFL game live every Sunday,
          was also included at no extra cost.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <ChoicePackage />
        </Viewport>
      </Article>
    </>
  );
}
