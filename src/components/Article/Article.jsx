import styled from "styled-components";
import { FARBEN as f } from "../../Theme";

const DefaultArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);
  box-sizing: border-box;
  background: ${f.papier};
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  padding: 16px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
`;

export default function Article({ children }) {
  return (
    <DefaultArticle>
      <ArticleContainer>{children}</ArticleContainer>
    </DefaultArticle>
  );
}
