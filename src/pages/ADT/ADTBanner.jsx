import Banner from "../../components/Banner/LogoBanner";
import adtLogo from "../../assets/ad/adt.svg";
export default function BannerADT({ fixedLogo }) {
  return <Banner logo={adtLogo} alt='ADT' fixedLogo={fixedLogo} />;
}
