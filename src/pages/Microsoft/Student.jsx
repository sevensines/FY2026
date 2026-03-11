import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import StudentEn from "../../projects/Student2016/StudentEn";
import ImagineEn from "../../projects/Student2016/ImagineEn";

import stuLogo from "../../assets/ms/stu.svg";
export default function Student() {
  const crumbs = [
    {
      text: "Microsoft",
      url: "/Microsoft",
    },
    {
      text: "Student",
      url: "/Microsoft/Student",
    },
  ];

  return (
    <>
      {" "}
      <Breadcrumb route={crumbs} />
      <Banner logo={stuLogo} alt='Microsoft Student' />
      <Article>
        <Copy title='Microsoft Student & Imagine Cup Newsletter'>
          <b>Front End Developer • Email Developer • Graphic Designer</b>
          <br />
          Microsoft Student and Imagine Cup are services that offer students and
          educators access to computer programming courses and webinars
          sponsored by Office 365. Students who are enrolled at qualifying
          schools also receive access to Microsoft products, scholarships,
          internships, programs and jobs. The Student and Imagine Cup
          Newsletters are monthly digital publications that help subscribers
          stay informed on the latest products, events, and educational
          activities.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <>
            <StudentEn />
            <br />
            <ImagineEn />
          </>
        </Viewport>
      </Article>
    </>
  );
}
