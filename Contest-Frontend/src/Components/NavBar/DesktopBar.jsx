/* eslint-disable no-unused-vars */
import React from "react";

import styled from "styled-components";
import { secondaryColor } from "../Color/Color";
import { Link } from "react-router-dom";
const DesktopBar = () => {
  return (
    <Navigation>
      <li>
        <Link to="/">Profile</Link>
      </li>
      <li>
        <Link to="/message">message</Link>
      </li>
      <li>
        <Link to="/classes">classes</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Navigation>
  );
};

export default DesktopBar;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  li {
    margin: 0 10px;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
