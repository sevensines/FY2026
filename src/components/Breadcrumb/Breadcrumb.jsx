import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DefaultList = styled.ul`
  margin: 0;
  padding: 1vw 0;
  list-style: none;

  li {
    position: relative;
    display: inline;
    font-size: 18px;
    a {
      position: relative;
      margin: 0px 4px;
      padding: 4px 0;
      color: #f2bf80;
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
    }
  }
  li + li {
    &:before {
      padding: 8px;
      color: #f2bf80;
      content: "⊸";
    }
  }
`;

export default function Breadcrumb({ route }) {
  return (
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
  );
}
