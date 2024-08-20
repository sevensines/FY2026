import styled from "styled-components";
import { COLORS as c } from "../../Theme";

const ViewOption = styled.button`
  margin: 0;
  padding: 4px 16px;
  color: ${c.orange};
  font-weight: 900;
  font-family: inherit;
  text-transform: uppercase;
  background: ${c.gray};
  transition: color 300ms, background 300ms;
  border: 2px solid ${c.orange};
  cursor: pointer;

  &:first-child {
    border-right: none;
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-left: none;
    border-radius: 0 4px 4px 0;
  }

  &._active {
    color: #00161a;
    background: ${c.orange};
  }

  &:hover {
    color: #00161a;
    background: ${c.orange};
    transition: color 300ms, background 300ms;
  }
`;

export default function ViewButton({ children, isSelected, ...props }) {
  return (
    <ViewOption className={isSelected ? "_active" : ""} {...props}>
      {children}
    </ViewOption>
  );
}
