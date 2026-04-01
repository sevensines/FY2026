import Banner from "../../components/Banner/LogoBanner";

export default function BannerADT({ fixedLogo }) {
  return (
    <Banner logo='/public/images/ad/adt.svg' alt='ADT' fixedLogo={fixedLogo} />
  );
}
