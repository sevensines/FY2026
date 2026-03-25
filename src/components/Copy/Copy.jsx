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
    font-size: 0.8rem;
    b {
      font-size: 125%;
    }
  }
  @media (min-width: 768px) {
    p {
      order: 2;
      padding: 16px;
      font-size: 1rem;
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
