import Banner from "../../components/Banner/LogoBanner";
//import azrLogo from "../../../public/ms/azr.svg";
export default function BannerAZR({ fixedLogo }) {
  return (
    <Banner
      logo='/public/images/ms/azr.svg'
      alt='Microsoft Azure'
      fixedLogo={fixedLogo}
    />
  );
}
