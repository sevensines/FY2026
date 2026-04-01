import styled from "styled-components";
import vznLogo from "../../../public/images/vz/vzn-clr.svg";

const VznHeader = styled.div`
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

const VznLogo = styled.div`
  width: 148px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${vznLogo}) no-repeat center center;
  background-size: contain;
`;

const VznNumber = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #eb1d24;
    font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
  }
`;

export default function HeaderVZN() {
  return (
    <VznHeader>
      <VznLogo />
      <VznNumber>
        <h5>Order now! (800)-555-1234</h5>
      </VznNumber>
    </VznHeader>
  );
}
