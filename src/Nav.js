import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  fill: #ddd;
  color: #ddd;
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 1em;
  font-size: 16px;

  &.active {
    background-color: #000;
  }

  &:hover {
    color: #fff;
    fill: #fff;
  }
`;

class Nav extends Component {
  render() {
    return (
      <nav>
        <StyledLink to="/meters/">Meters</StyledLink>
        <StyledLink to="/map/">Kart</StyledLink>
      </nav>
    );
  }
}

export default Nav;
