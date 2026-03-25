import Banner from "../../components/Banner/LogoBanner";
import azrLogo from "../../assets/ms/azr.svg";
export default function BannerAZR({ fixedLogo }) {
  return <Banner logo={azrLogo} alt='Microsoft Azure' fixedLogo={fixedLogo} />;
}
