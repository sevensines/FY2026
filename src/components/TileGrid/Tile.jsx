import styled from "styled-components";
import { COLORS as c } from "../../Theme";
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
    padding: 3%;
    text-align: center;
    background-color: ${c.orangelt};
     img{
      flex 1 0 100%;
      height: 100%;
      max-width: 60%;
     }
  }
`;

const DefaultTile = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 50vw;
  max-height: 220px;
  padding: 3%;
  background: ${c.orangelt};
  overflow: hidden;
  transition: padding 250ms;

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
    transition: filter 500ms, mixBlendMode 500ms;
  }

  &:before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${c.olive};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &:hover {
    background: linear-gradient(to bottom, #ef8f30 0%,#f2bf80 25%,#f2bf80 75%,#ef8f30 100%);
    padding: 2%;
    transition: padding 250ms;
    img {
      filter: grayscale(0%) contrast(1) blur(0);
      mix-blend-mode: normal;
      transition: filter 500ms, mixBlendMode 500ms;
    }
  }
`;

export default function Tile({ title, logo, bg, link }) {
  return (
    <TileLink to={link} title={title} aria-label={title}>
      <DefaultTile>
        <TileOverlay>
          <span>
            <img src={logo} />
          </span>
        </TileOverlay>
        <img src={bg} />
      </DefaultTile>
    </TileLink>
  );
}
