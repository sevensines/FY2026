import Banner from "../../components/Banner/LogoBanner";

export default function BannerTMO({ fixedLogo }) {
  return (
    <Banner
      logo='/public/images/tm/tmo.svg'
      alt='T-Mobile'
      fixedLogo={fixedLogo}
    />
  );
}
