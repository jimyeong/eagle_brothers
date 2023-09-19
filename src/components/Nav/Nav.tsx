import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UINavigationBlock = styled.nav`
  .nav__item {
    color: #e8e8e8;
    height: 48px;
    /* min-height: 48px; */
    line-height: 48px;
    padding-left: 24px;
  }
  .nav__link {
    height: 100%;
    display: block;
  }
`;

const navList = [
  { name: "Home", path: "/" },
  { name: "English Practise", path: "/practise" },
];
type TypeNavItem = { name: string; path: string };
export default function Nav() {
  return (
    <UINavigationBlock className="nav">
      <ul>
        {navList.map((item: TypeNavItem, i: number) => {
          return (
            <li className="nav__item">
              <Link to={item.path} className="nav__link text-slate-950">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </UINavigationBlock>
  );
}
