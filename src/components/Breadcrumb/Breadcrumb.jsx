import React from "react";
import { Link } from "react-router-dom";
import { COLORS as c, FARBEN as f } from "../../Theme";
import styled from "styled-components";

const CrumbWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${f.papier};

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const CrumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${f.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${f.grauhl};
`;

const DefaultList = styled.ul`
  margin: 0;
  padding: 4px 16px;
  list-style: none;

  li {
    position: relative;
    display: inline;
    font-size: 14px;
    a {
      position: relative;
      margin: 0px 4px;
      padding: 4px 0 0 0;
      color: ${f.graudk};
      font-weight: 900;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;

      &:first-child {
        margin: 0px 4px 0 0;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${f.orange};
        transform-origin: right center;
        transform: scaleX(0);
        transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
        will-change: transform;
      }
      &:hover,
      &:focus,
      &.has-focus {
        text-decoration: none;
        transition: color 500ms;
        &:after {
          transform: scaleX(1);
          transform-origin: left center;
        }
      }
    }
  }
  li + li {
    &:before {
      padding: 8px;
      color: ${f.graudk};
      content: "⊸";
    }
  }

  @media (min-width: 768px) {
    li {
      font-size: 18px;
    }
  }
`;

export default function Breadcrumb({ route }) {
  return (
    <CrumbWrapper>
      <CrumbContainer>
        <DefaultList>
          <li>
            <Link to='/' title='Home' aria-label='Breadcrumb: Home'>
              Home
            </Link>
          </li>
          {route &&
            route.map((item) => (
              <li key={item.text}>
                <Link to={item.url} title={item.text} aria-label={item.text}>
                  {item.text}
                </Link>
              </li>
            ))}
        </DefaultList>
      </CrumbContainer>
    </CrumbWrapper>
  );
}
