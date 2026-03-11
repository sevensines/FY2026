import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
import CornerFrame from "../CornerFrame/CornerFrame";

const CopyBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  h2 {
    margin: 0;
    color: ${f.graudk};
    font-weight: 900;
    text-transform: uppercase;
  }
  p {
    margin: 0 0 4px 0;
    b {
      font-size: 125%;
    }
  }
`;

export default function Copy({ title, children }) {
  return (
    <CornerFrame>
      <CopyBlock>
        <p>{children}</p>
      </CopyBlock>
    </CornerFrame>
  );
}
