import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const DefaultCTA = styled.a`
  display: inline-block;
  width: fit-content;
  padding: 4px 16px;
  color: ${c.orange};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid ${c.orange};
  border-radius: 4px;
  transition: color 300ms, background 300ms;

  &:hover,
  &:active {
    color: ${c.gray};
    background: ${c.orange};
    transition: color 300ms, background 300ms;
  }
`;

export default function Button({ text, url, blank }) {
  return (
    <DefaultCTA
      title={text}
      href={url}
      aria-label={`link: ${text}`}
      target={blank ? "_blank" : ""}
    >
      {text}
    </DefaultCTA>
  );
}
