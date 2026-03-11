import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import Win10EN from "../../projects/Win10/WinTenEN";
import Win10HE from "../../projects/Win10/WinTenHE";
import Win10TH from "../../projects/Win10/WinTenTH";

import tenLogo from "../../assets/ms/ten.svg";

export default function Win10() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Windows 10",
      url: "/Microsoft/Windows10",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo={tenLogo} alt='Microsoft Student' />
      <Article>
        <Copy title='Windows 10 Preview Registration'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          The Windows 10 Preview Registration campaign was an effort to promote
          the launch of Microsoft's latest edition of its operating system
          Windows 10. The site offered users access to register for a preview
          release of the OS before the official release. This campaign was
          launched globally, localized into 32 languages, and saw nearly 10
          million pre-registrations over the course of the enrollment period.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <>
            <Win10EN />
            <br />
            <Win10HE />
            <br />
            <Win10TH />
          </>
        </Viewport>
      </Article>
    </>
  );
}
