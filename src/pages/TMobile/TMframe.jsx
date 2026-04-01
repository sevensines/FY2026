import styled from "styled-components";
import swisHeavy from "../../../public/fonts/tm/Swiss721BT-Heavy-webfont.ttf";
import swisBold from "../../../public/fonts/tm/Swiss721BT-Bold-webfont.ttf";
import swisRoman from "../../../public/fonts/tm/Swiss721BT-Roman-webfont.ttf";

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
