import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const DefaultArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${c.gray};
  border-top: 1px solid ${c.orangelt};
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  padding: 16px;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;

export default function Article({ children }) {
  return (
    <DefaultArticle>
      <ArticleContainer>{children}</ArticleContainer>
    </DefaultArticle>
  );
}
