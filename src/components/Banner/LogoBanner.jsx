import styled from "styled-components";
import { FARBEN as f } from "../../Theme";

const DefaultBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
  margin: 0 0 16px 0;
  background: ${f.graudk};
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
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
      <LogoContainer>
        <BannerLogo>
          <img src={logo} alt={alt} border='0' />
        </BannerLogo>
      </LogoContainer>
    </DefaultBanner>
  );
}
