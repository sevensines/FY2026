import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const DefaultCTA = styled.button`
  &.btn-20,
  &.btn-20 *,
  &.btn-20 :after,
  &.btn-20 :before,
  &.btn-20:after,
  &.btn-20:before {
    border: 0 solid;
    box-sizing: border-box;
  }
  &.btn-20 {
    margin: 0;
    padding: 0;
    background-color: ${c.gray};
    background-image: none;
    color: ${c.orange};
    font-weight: bold;
    font-family: "Quicksand", sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    cursor: pointer;
  }
  &.btn-20:disabled {
    cursor: default;
  }
  &.btn-20:-moz-focusring {
    outline: auto;
  }
  &.btn-20 svg {
    display: block;
    vertical-align: middle;
  }
  &.btn-20 [hidden] {
    display: none;
  }
  &.btn-20 {
    position: relative;
    padding: 4px 16px;
    border-radius: 4px;
    border-width: 2px;
    overflow: hidden;
    &:before,
    &:after {
      --skew: -0.2;
      background: ${c.orange};
      content: "";
      display: block;
      height: 102%;
      left: calc(-40% - 50% * var(--skew));
      pointer-events: none;
      position: absolute;
      top: -104%;
      transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
      transition: transform 0.2s ease;
      width: 100%;
    }
    &:after {
      --progress: 0%;
      left: calc(40% + 50% * var(--skew));
      top: 102%;
      z-index: -1;
    }
    &:hover {
      &:before {
        --progress: 100%;
      }
      &:after {
        --progress: -102%;
      }
    }
  }
  &.btn-20 span {
    mix-blend-mode: difference;
  }
`;

export default function Button({ text, url, blank }) {
  return (
    <DefaultCTA
      title={text}
      href={url}
      aria-label={`link: ${text}`}
      target={blank ? "_blank" : ""}
      className='btn-20'
    >
      <span>{text}</span>
    </DefaultCTA>
  );
}
