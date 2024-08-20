import styled from "styled-components";
import swisHeavy from "../../assets/tm/fonts/Swiss721BT-Heavy-webfont.ttf";
import swisBold from "../../assets/tm/fonts/Swiss721BT-Bold-webfont.ttf";
import swisRoman from "../../assets/tm/fonts/Swiss721BT-Roman-webfont.ttf";

const DefaultFrameTMO = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;

  @font-face {
    font-family: swis721 heavy;
    src: url(${swisHeavy});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 bold;
    src: url(${swisBold});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 roman;
    src: url(${swisRoman});
    font-weight: normal;
  }
`;

export default function FrameTMO({ children }) {
  return <DefaultFrameTMO>{children}</DefaultFrameTMO>;
}
