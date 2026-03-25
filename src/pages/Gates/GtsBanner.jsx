import Banner from "../../components/Banner/LogoBanner";
import gtsLogo from "../../assets/gt/gts.svg";
export default function BannerGTS({ fixedLogo }) {
  return <Banner logo={gtsLogo} alt='Gates Foundtaion' fixedLogo={fixedLogo} />;
}
