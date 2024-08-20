import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const DefaultBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${c.orangelt};
`;

const BannerLogo = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  padding: 1vw;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);

  img {
    width: 100%;
    max-width: 280px;
    height: auto;
  }
`;

export default function Banner({ logo, alt }) {
  return (
    <DefaultBanner>
      <BannerLogo>
        <img src={logo} alt={alt} border='0' />
      </BannerLogo>
    </DefaultBanner>
  );
}
