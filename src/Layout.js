import React, { Component } from "react";
import MapView from "./MapView";
import Nav from "./Nav";
import styled from "styled-components";
import Meters from "./Meters";
import { Route } from "react-router-dom";

const Brand = styled.h1`
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 3em;
`;

const Aside = styled.aside`
  background-color: rgb(21, 21, 21);
  width: 20%;
`;

const Main = styled.main`
  background-color: #ddd;
  width: 90%;
`;

const Page = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

class Layout extends Component {
  render() {
    return (
      <Page>
        <Aside>
          <Brand>Samle</Brand>
          <Nav />
        </Aside>
        <Main>
          <Route path="/meters/" component={Meters} />
          <Route path="/map/" component={MapView} />
        </Main>
      </Page>
    );
  }
}

export default Layout;
