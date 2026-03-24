import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
import { TileLink, TileCTA } from "../../components/TileGrid/Tile";

const LostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);
  box-sizing: border-box;
  background: ${f.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`;

const LostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
`;

const LostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;

export default function NotFound() {
  return (
    <LostWrapper>
      <LostContainer>
        <LostDetails>
          <h1>404</h1>
          <TileCTA>
            <TileLink to='/' title='HOME' aria-label='Button: Home'>
              <button title='HOME' aria-label='Button: HOME'>
                <span>⠿</span>HOME<span>⠿</span>
              </button>
            </TileLink>
          </TileCTA>
        </LostDetails>
      </LostContainer>
    </LostWrapper>
  );
}
