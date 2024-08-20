import styled from "styled-components";

const CopyBlock = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    color: #ef8f30;
    font-weight: 900;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    color: #f2bf80;
  }
`;

export default function Copy({ title, children }) {
  return (
    <CopyBlock>
      <h2>{title}</h2>
      <p>{children}</p>
    </CopyBlock>
  );
}
