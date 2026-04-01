import styled from "styled-components";
import adtZurch from "../../../public/fonts/ad/zurch.ttf";
import adtZurchI from "../../../public/fonts/ad/zurchitalic.ttf";
import adtZurchIB from "../../../public/fonts/ad/zurchitalbold.ttf";
import adtZurchL from "../../../public/fonts/ad/zurchlight.ttf";

const DefaultFrameADT = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url(${adtZurch});
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url(${adtZurch});
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url(${adtZurchIB});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url(${adtZurchI});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url(${adtZurchL});
  }
`;

export default function FrameADT({ children }) {
  return <DefaultFrameADT>{children}</DefaultFrameADT>;
}
