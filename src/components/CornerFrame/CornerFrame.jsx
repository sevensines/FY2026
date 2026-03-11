import styled from "styled-components";
import { FARBEN as f } from "../../Theme";

const GlowFrame = styled.div`
  display: flex;
  justify-content: space-between;
  &.bt {
    transform: rotate(180deg);
  }
`;

const GlowBar = styled.div`
  width: 12px;
  height: 1px;
  background: ${f.orange};
`;
const GlowLine = styled.div`
  width: 1px;
  height: 12px;
  background: ${f.orange};
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
