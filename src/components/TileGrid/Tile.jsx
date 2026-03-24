import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
import { Link } from "react-router-dom";

export const TileLink = styled(Link)`
  text-decoration: none;
  border: 0;
`;

const DefaultTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1 1 100%;
  height: 220px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
  overflow: hidden;
`;

const ClientBackground = styled.div`
  position: relative;  
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0;
  background: ${f.blau};
  overflow: hidden;
  
  > img {
    position: relative;
    flex 1 0 100%;
    width: 100%;   
    max-width: 100%;
    height: 100%;
    filter: grayscale(100%) contrast(2) blur(0);
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${f.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

const ClientLogo = styled.div`
  position: absolute;
  top: 0px;
  left: -3px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 220px;
  height: 100%;
  transform: rotate(90deg);

  span {
    width: 100%;
    padding: 3%;
    text-align: center;
    background-color: ${f.graudk};
    img {
      height: 100%;
      max-width: 60%;
    }
  }
`;

const ClientDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 8px 0 32px;
    background: ${f.graudk};
    color: ${f.orange};
    font-size: clamp(1em, 2vw, 1.8em);
    font-weight: 500;
    text-transform: uppercase;
    span {
      color: ${f.graumt};
    }
  }

  ul {
    margin: 0 0 0 16px;
    padding: 12px 24px 0 24px;

    li {
      padding: 8px 0 0 12px;
      line-height: 1.2;
      &::marker {
        content: "◢";
      }
    }
  }
`;

export const TileCTA = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px 16px 0;

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

export default function Tile({ title, sgl, role = "", logo, bg, link }) {
  const roleArray = role.split(",");

  return (
    <DefaultTile>
      <ClientBackground>
        <ClientLogo>
          <span>
            <img src={logo} alt={title} border='0' />
          </span>
        </ClientLogo>
        <img src={bg} border='0' />
      </ClientBackground>
      <ClientDetail>
        <div>
          <h4>
            {`${title}`}
            <span>{`${sgl}`}</span>
          </h4>
          <ul>
            {roleArray.length > 1 &&
              roleArray.map((title) => <li key={title}>{title}</li>)}
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
