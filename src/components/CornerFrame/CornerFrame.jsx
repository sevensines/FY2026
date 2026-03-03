import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const GlowFrame = styled.div`
  display: flex;
  justify-content: space-between;
  &.bt {
    transform: rotate(180deg);
  }
`;

const GlowBar = styled.div`
  width: 16px;
  height: 4px;
  background: ${c.olive};
`;
const GlowLine = styled.div`
  width: 4px;
  height: 12px;
  background: ${c.olive};
`;

const GlowCorner = styled.div`
  display: flex;
  flex-direction: column;

  &.tr {
    transform: rotate(90deg);
  }
`;

export default function CornerFrame({ children }) {
  return (
    <>
      <GlowFrame>
        <GlowCorner>
          <GlowBar />
          <GlowLine />
        </GlowCorner>
        <GlowCorner className='tr'>
          <GlowBar />
          <GlowLine />
        </GlowCorner>
      </GlowFrame>
      {children}
      <GlowFrame className='bt'>
        <GlowCorner>
          <GlowBar />
          <GlowLine />
        </GlowCorner>
        <GlowCorner className='tr'>
          <GlowBar />
          <GlowLine />
        </GlowCorner>
      </GlowFrame>
    </>
  );
}
