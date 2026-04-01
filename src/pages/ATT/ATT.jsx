import Banner from "../../components/Banner/LogoBanner";
import Article from "../../components/Article/Article";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Copy from "../../components/Copy/Copy";
import Viewport from "../../components/Viewport/Viewport";
import SmartSecurity from "../../projects/SmartSecurity/SmartSecurity";

export default function ATT() {
  const crumbs = [
    {
      text: "AT&T",
      url: "/ATT",
    },
  ];

  return (
    <>
      <Breadcrumb route={crumbs} />
      <Banner logo='/public/images/at/att.svg' alt='AT&T Digital Life' />
      <Article>
        <Copy title='AT&T Smart Security'>
          <b>Front End Developer • Graphic Designer</b>
          <br />
          The AT&T Smart Security click to call landing page campaign was part
          of AT&T Digital Life's introduction of home security and automation
          services. Users can customize the AT&T Digital Life wireless system to
          fit their homes. AT&T Digital Life currently offers 24/7 Professional
          Monitoring, Video Monitoring, Remote Door Locks, Lighting & Thermostat
          Control, Water Detection and Fire & Carbon Monoxide Monitoring. Users
          also get mobile access to arm and disarm the system, view video from
          security cameras, monitor sensors lock and unlock doors, and turn off
          devices utilizing smart plugs.
        </Copy>
        <br />
        <Viewport viewSelected='desktop'>
          <SmartSecurity />
        </Viewport>
      </Article>
    </>
  );
}
