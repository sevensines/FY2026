import styled from "styled-components";
import { FARBEN as f } from "../../Theme";
import { Link } from "react-router-dom";

const TileLink = styled(Link)`
  text-decoration: none;
  border: 0;
`;

const TileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms;
  span {
    width: 100%;
    padding: 3% 0;
    font-size: 2rem;
    font-weight: 100;
    color: ${f.orange};
    text-align: center;
    background-color: ${f.graudk};
  }
`;

const DefaultTile = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 50vw;
  max-height: 220px;
  background-color: ${f.blau};
  overflow: hidden;
  transition: padding 500ms;

  > img {
    filter: grayscale(100%) contrast(1) blur(0);
    flex 1 0 100%;
    height: 100%;
    max-width: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
    position: relative;
    width: 100%;
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

  &:hover {
    background: ${f.orange};
    padding: 1%;
    transition: padding 500ms;
    img {
      filter: grayscale(0%) contrast(1) blur(0);
      mix-blend-mode: normal;
      transition: filter 500ms, mixBlendMode 500ms;
    }

    > ${TileOverlay} {
      opacity: 0;
      transition: opacity 500ms;
    }
  }
`;

export default function TileText({ title, bg, link }) {
  return (
    <TileLink to={link} title={title} aria-label={title}>
      <DefaultTile>
        <TileOverlay>
          <span>{title}</span>
        </TileOverlay>
        <img src={bg} />
      </DefaultTile>
    </TileLink>
  );
}
