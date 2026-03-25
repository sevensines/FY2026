import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerGTS from "./GTSBanner";

import gtsLetter from "../../assets/gt/AL2013_English.pdf";

export default function AnnualLetter() {
  const crumbs = [
    {
      text: "Gates",
      url: "/Gates",
    },
    {
      text: "Annual Letter",
      url: "/Gates/AnnualLetter",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <BannerGTS fixedLogo />
      <Article>
        <Copy title='Gates Foundation Annual Letter 2013'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          The Gates Foundation Annual Letter is a yearly publication to higlight
          the foundations current philanthropic endeavors and discuss the
          specific focus for year ahead.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <>
            <iframe
              width='605'
              height='605'
              src='https://www.youtube.com/embed/380sy5_ZQzo?rel=0'
              frameborder='0'
              gesture='media'
              allow='encrypted-media'
              allowfullscreen
              className='letter-vid'
            ></iframe>
            <br />
            <object
              data={gtsLetter}
              type='application/pdf'
              width='100%'
              height='100%'
            >
              <p>The Gates Foundation Annual Letter 2013</p>
            </object>
          </>
        </Viewport>
      </Article>
    </>
  );
}
