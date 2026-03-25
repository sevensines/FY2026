import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { COLORS as c } from "../../Theme";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${c.gray};
  border-bottom: 1px solid ${c.orangelt};

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1904px;
`;

const NavLogo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 102px;
  height: 34px;
  color: ${c.orangelt};
  font-weight: 900;

  svg {
    max-width: 84px;
  }
  @media (min-width: 768px) {
    svg {
      max-width: 102px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  position: relative;
  margin: 0px;
  padding: 4px 16px;
  color: ${c.orangelt};
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${c.orange};
    transform-origin: right center;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    will-change: transform;
  }
  &:hover,
  &:focus,
  &.has-focus {
    color: ${c.orange};
    text-decoration: none;
    transition: color 500ms;
    &:after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }

  @media (min-width: 768px) {
    margin: 0 12px;
  }
`;

export default function Navigation() {
  return (
    <NavWrapper>
      <NavContainer>
        <NavLogo aria-label='logo' color='#ef8f30'>
          <Link to='/'>
            <Logo />
          </Link>
        </NavLogo>
        <NavLinks aria-label='navigation'>
          <NavLink to='/'>Work</NavLink>
          <NavLink to='/'>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
}
