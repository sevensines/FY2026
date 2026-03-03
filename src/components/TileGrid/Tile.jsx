import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
import { Link } from "react-router-dom";

const TileLink = styled(Link)`
  text-decoration: none;
  border: 0;
`;

const DefaultTile = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 50vw;
  max-height: 220px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
  overflow: hidden;
  transition: padding 250ms;
`;

const ClientBackground = styled.div`
  flex: 1;
  background: ${f.graudk};
`;

const ClientDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    font-size: clamp(1em, 2vw, 1.8em);
    font-weight: 400;
    text-transform: uppercase;
    span {
      color: ${f.graumt};
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      &::marker {
        content: "◢";
      }
    }
  }
`;

const TileCTA = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    position: relative;
    top: 0;
    right: 0;
    padding: 8px 16px;
    font-family: "Source Code Pro", "Courier New", monospace, sans-serif;
    font-weight: 400;
    color: ${f.graudk};
    font-size: 1.1rem;
    background: ${f.orange};
    clip-path: polygon(
      12% 0,
      0 0,
      100% 0,
      100% 0,
      100% 68%,
      88% 100%,
      0 100%,
      0 32%
    );
    border: 0 !important;
    cursor: pointer;
    transition:
      background 150ms,
      font-size 150ms,
      top 150ms,
      box-shadow 150ms;

    span {
      opacity: 0.4;
      transition: opacity 150ms;
    }

    &:hover {
      top: -2px;
      background: ${f.orangedk};
      span {
        opacity: 1;
      }
    }
  }
`;

export default function Tile({ title, sgl, logo, bg, link, children }) {
  return (
    <DefaultTile>
      <ClientBackground>IMG</ClientBackground>
      <ClientDetail>
        <div>
          <h4>
            //{`${title}`}
            <span>{`${sgl}`}</span>
          </h4>
          <ul>
            <li>ROLE</li>
          </ul>
        </div>

        <TileCTA>
          <TileLink to={link} title={title} aria-label={title}>
            <button title={title} aria-label={`Button: View ${title}`}>
              <span>⠿</span>VIEW<span>⠿</span>
            </button>
          </TileLink>
        </TileCTA>
      </ClientDetail>
    </DefaultTile>
  );
}
