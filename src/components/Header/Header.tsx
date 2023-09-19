import React from "react";
import styled from "styled-components";
import { UIConfig } from "configs";
import { Link } from "react-router-dom";
import Nav from "components/Nav/Nav";

const UIHeaderBlock = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: ${UIConfig.layouts.header.height}px;
  //   background-color: ${UIConfig.colour.primary};
  box-shadow: 1px 1px 13px 13px rgba(0, 0, 0, 0.09);
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );

  z-index: 1000;
  .side__bar {
    width: 320px;
    height: 100%;
    position: fixed;
    left: 0;
    top: ${UIConfig.layouts.header.height}px;
    bottom: ${UIConfig.layouts.footer}px;
    background-color: #fefefe;
    box-shadow: 1px 1px 13px 13px rgba(0, 0, 0, 0.09);
  }
  .logo__link {
    font-weight: 600;
    display: inline-block;
    height: 100%;
    line-height: ${UIConfig.layouts.header.height}px;
  }
  .nav {
    font-size: 17px;
    font-weight: 500;
  }
`;
export default function Header() {
  return (
    <UIHeaderBlock>
      <div className="container mx-auto">
        <Link className="logo__link" to="/">
          <span>LOGO</span>

          {/* <img src="" alt="" /> */}
        </Link>
      </div>
      <div className="side__bar">
        <Nav />
      </div>
    </UIHeaderBlock>
  );
}
