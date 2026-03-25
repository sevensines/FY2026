import Banner from "../../components/Banner/LogoBanner";
import tmoLogo from "../../assets/tm/tmo.svg";
export default function BannerTMO({ fixedLogo }) {
  return <Banner logo={tmoLogo} alt='T-Mobile' fixedLogo={fixedLogo} />;
}
