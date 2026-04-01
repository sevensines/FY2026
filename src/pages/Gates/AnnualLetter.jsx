import styled from "styled-components";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import BannerGTS from "./GTSBanner";

const VidFrame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: lightgrey;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const ObjFrame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: lightgrey;
  object {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

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
            <VidFrame>
              <iframe
                src='https://www.youtube.com/embed/380sy5_ZQzo?rel=0'
                frameBorder='0'
                gesture='media'
                allow='encrypted-media'
                allowFullScreen
                className='letter-vid'
              ></iframe>
            </VidFrame>
            <br />
            <ObjFrame>
              <object
                data='/public/files/AL2013_English.pdf'
                type='application/pdf'
                width='100%'
                height='100%'
              >
                <p>The Gates Foundation Annual Letter 2013</p>
              </object>
            </ObjFrame>
          </>
        </Viewport>
      </Article>
    </>
  );
}
