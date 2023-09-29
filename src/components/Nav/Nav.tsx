import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Buttons } from "components";
import { useNavigate } from "react-router-dom";

const UINavigationBlock = styled.nav`
  .nav__item {
    color: #e8e8e8;
    height: 48px;
    /* min-height: 48px; */
    line-height: 48px;
  }
  .nav__link {
    height: 100%;
    display: block;
    line-height: 48px;
    text-align: left;
    width: 100%;
    border-radius: 0;
    padding: 0;
    padding-left: 24px;
    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

const navList = [
  { name: "Home", path: "/" },
  { name: "English Practise", path: "/english" },
];
type TypeNavItem = { name: string; path: string };
export default function Nav() {
  const navigate = useNavigate();
  return (
    <UINavigationBlock className="nav">
      <ul>
        {navList.map((item: TypeNavItem, i: number) => {
          return (
            <li key={i} className="nav__item">
              <Buttons.RippleButton
                style={{ color: "black", width: "100%", display: "block" }}
                onClick={() => {
                  navigate(item.path);
                }}
                className="nav__link text-slate-950"
              >
                {item.name}
              </Buttons.RippleButton>
            </li>
          );
        })}
      </ul>
    </UINavigationBlock>
  );
}
