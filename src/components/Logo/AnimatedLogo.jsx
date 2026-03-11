import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const LogoStack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  }
`;

const AnimateLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 102px;
  height: 32px;
  position: relative;
  svg {
    width: 102px;
    height: 32px;
  }
  ${LogoStack}:nth-child(1) {
    transition: top 100ms, left 100ms, opacity 300ms;
  }
  ${LogoStack}:nth-child(2) {
    opacity: 0;
    transition: top 200ms, left 200ms, opacity 300ms;
  }
  ${LogoStack}:nth-child(3) {
    opacity: 0;
    transition: opacity 300ms;
  }
  &:hover {
    ${LogoStack}:nth-child(1) {
      top: 2px;
      left: -4px;
      opacity: 0.5;
      transition: top 300ms cubic-bezier(1, 0, 0, 1),
        left 300ms cubic-bezier(1, 0, 0, 1),
        opacity 300ms cubic-bezier(1, 0, 0, 1);
    }
    ${LogoStack}:nth-child(2) {
      top: 5px;
      left: -8px;
      opacity: 0.2;
      transition: top 400ms cubic-bezier(1, 0, 0, 1),
        left 400ms cubic-bezier(1, 0, 0, 1),
        opacity 300ms cubic-bezier(1, 0, 0, 1);
    }
    ${LogoStack}:nth-child(3) {
      opacity: 1;
      transition: opacity 100ms;
    }
  }
`;

export default function AnimatedLogo() {
  return (
    <AnimateLogo>
      <LogoStack>
        <Logo />
      </LogoStack>
      <LogoStack>
        <Logo />
      </LogoStack>
      <LogoStack>
        <Logo solid />
      </LogoStack>
    </AnimateLogo>
  );
}
