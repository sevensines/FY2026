import styled from "styled-components";
import tmoLogo from "../../../public/images/tm/tmo-logo.svg";

const TmoHeader = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TmoLogo = styled.div`
  width: 225px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${tmoLogo}) no-repeat center;
`;

const TmoNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #e20074;
    font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
  }
`;

export default function HeaderTMO() {
  return (
    <TmoHeader>
      <TmoLogo />
      <TmoNumber>
        <h5>Order now! (800)-555-1234</h5>
      </TmoNumber>
    </TmoHeader>
  );
}
