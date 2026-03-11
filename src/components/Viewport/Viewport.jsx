import styled from "styled-components";

const DefaultFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 16px;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  transition: width 300ms;

  &.desktop {
    width: 100%;
    max-width: 1280px;
    transition: width 300ms;
  }
  &.tablet {
    width: 768px;
    transition: width 300ms;
  }
  &.mobile {
    width: 320px;
    transition: width 300ms;
  }
`;

export default function Viewport({ viewSelected, children }) {
  return (
    <DefaultFrame>
      <Frame className={(`${viewSelected}` || "").toLowerCase()}>
        {children}
      </Frame>
    </DefaultFrame>
  );
}
