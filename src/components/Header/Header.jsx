import styled from "styled-components";
import Logo from "../Logo/Logo";
import Braille from "../Logo/Braille";
import { Link } from "react-router-dom";
import { FARBEN as f } from "../../Theme";
import iconLinkedIn from "../../assets/icon-linkedin.svg";
import iconEmail from "../../assets/icon-email.svg";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);
  box-sizing: border-box;
  background: ${f.papier};

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeaderLogo = styled.div`
  flex: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 4px 0;
  color: ${f.graudk};
  font-weight: 900;
  background: ${f.orange};
  border-radius: 2px 2px 0 0;
  transition: background 150ms;

  &:hover {
    background: ${f.orangedk};
    transition: background 150ms;
  }

  a {
    display: flex;
    justify-content: center;
  }

  svg {
    width: 84px;
  }

  @media (min-width: 768px) {
    width: 132px;
    padding: 0;
    border-radius: 2px 0 0 2px;
    svg {
      width: 102px;
    }
  }
`;

const HeaderBraille = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px 0 0 0;
  color: ${f.graudk};

  svg {
    width: 100%;
    max-width: 84px;
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 0 0 16px;
    background: none;
    svg {
      max-width: 220px;
    }
  }
`;

const HeaderTitle = styled.div`
  padding: 8px 16px 0 16px;
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: clamp(1em, 1.8em, 1.8em);
    font-weight: 400;
  }
  @media (min-width: 768px) {
    padding: 0 16px;
  }
`;

const HeaderContacts = styled.div`
  display: flex;
  margin: 8px 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const ContactsButton = styled.button`
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56px;
  padding: 8px 16px;
  background: ${f.orange};
  border: unset;
  overflow: hidden;
  cursor: pointer;
  transition: background 150ms;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${f.orangedk};
    opacity: 0;
    border-radius: 25%;
    transform: translate(-50%, -50%);
    transition:
      width 400ms,
      height 150ms,
      opacity 400ms;
  }

  &:last-child {
    border-radius: 0 2px 2px 0;
  }

  img {
    width: 100%;
    height: 20px;
    transition: transform 250ms;
  }

  &:hover {
    transition: background 150ms;

    img {
      transform: scale(109%);
      transition: transform 250ms;
    }

    &::before {
      width: 150%;
      height: 100%;
      opacity: 1;
    }
  }
`;

export default function Navigation() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Link to='/' title='VII' aria-label='Header Logo: Home'>
            <Logo solid color='#3a3a3a' />
          </Link>
        </HeaderLogo>
        <HeaderBraille>
          <Braille solid />
        </HeaderBraille>
        <HeaderTitle>
          <h1>//SEANSWIDLER</h1>
        </HeaderTitle>
        <HeaderContacts>
          <ContactsButton
            href='https://www.linkedin.com/in/sean-swidler-80a5b4b7/'
            aria-label='Header: LinkedIn'
            title='LinkedIn'
            target='_blank'
          >
            <img src={iconLinkedIn} alt='LinkedIn' />
          </ContactsButton>
          <ContactsButton
            href='mailto:sevensines@gmail.com'
            aria-label='Footer: Email'
            title='Email'
            target='_blank'
          >
            <img src={iconEmail} alt='Email' />
          </ContactsButton>
        </HeaderContacts>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
