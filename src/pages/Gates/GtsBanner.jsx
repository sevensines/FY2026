import Banner from "../../components/Banner/LogoBanner";
//import gtsLogo from "../../../public/images/gt/gts.svg";
export default function BannerGTS({ fixedLogo }) {
  return (
    <Banner
      logo='/public/images/gt/gts.svg'
      alt='Gates Foundtaion'
      fixedLogo={fixedLogo}
    />
  );
}
