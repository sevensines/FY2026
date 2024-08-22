import styled from "styled-components";
import { CLIENTS } from "../../data.js";
import Tile from "./Tile";

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0;
  padding: clamp(30px, 5vw, 80px);
  background: #00161a;
  box-sizing: border-box;
`;

export const TileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    &._three {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default function TileGrid() {
  return (
    <TileWrapper>
      <TileList>
        {CLIENTS.map((item) => (
          <Tile
            key={item.title}
            link={item.url}
            logo={item.logo}
            bg={item.bg}
          />
        ))}
      </TileList>
    </TileWrapper>
  );
}
