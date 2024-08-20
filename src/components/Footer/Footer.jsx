import styled from "styled-components";
import { COLORS as c } from "../../Theme";
import Logo from "../Logo/Logo";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 56px;
  margin-top: 32px;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);
  box-sizing: border-box;
  background: ${c.gray};
  border-top: 1px solid #f2bf80;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FooterLogo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 102px;
  height: 34px;
  color: #f2bf80;
  font-weight: 900;

  svg {
    max-width: 64px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
`;

const FooterLink = styled.a`
  position: relative;
  margin: 0px;
  padding: 4px 16px;
  color: #f2bf80;
  font-size: 12px;
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
    background: #ef8f30;
    transform-origin: right center;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    will-change: transform;
  }
  &:hover,
  &:focus,
  &.has-focus {
    color: #ef8f30;
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

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo aria-label='logo' color='#ef8f30'>
          <Logo />
        </FooterLogo>
        <FooterLinks aria-label='navigation'>
          <FooterLink
            href='mailto:sevensines@gmail.com'
            aria-label='Footer: Email'
            title='Email'
            target='_blank'
          >
            Email
          </FooterLink>
          <FooterLink
            href='https://www.linkedin.com/in/sean-swidler-80a5b4b7/'
            aria-label='Footer: LinkedIn'
            title='LinkedIn'
            target='_blank'
          >
            LinkedIn
          </FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}
