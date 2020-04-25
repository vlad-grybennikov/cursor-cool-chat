import React, {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Redirect, RouteProps} from "react-router";
import {Provider, connect} from "react-redux";

import Sign from "../sign/sign.controller";
import Bills from "../bills/bills.controller";
import store from "../../store";
import PrivateRoute from "./privateRoute";
import News from "../news/news.controller";

export const MENU = [{
    name: "Bills",
    path: "/bills",
    component: Bills
}, {
    name: "News",
    path: "/news",
    component: News
}, {
    name: "Profile",
    path: "/profile",
    component: null
}];

const Wrapper = styled.div`
  background-color:#fafafa;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 24px;
     -webkit-appearance: none;
     box-sizing: border-box;
  }
  body {
     margin: 0;
     padding: 0;
     font-size: 24px;
     color: #333;
     font-family: Helvetica;
     overflow: hidden;
  }
  input {
    outline: none;
    &:focus{
        outline: none;
    }
  }
`

const Copyrights = styled.footer`
  font-size: 14px;
  margin-top: auto;
  color: #bdbdbd;
  font-weight: 300;
  margin-bottom: 20px;
`;

export default class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle/>
                <Wrapper>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Switch>
                                {MENU.map(({path, name, component}: any) => (
                                    <PrivateRoute path={path} component={component}/>
                                ))}
                                <Route path="/sign" component={Sign}/>
                                <Route path="/" render={() => <Redirect to={"/bills"}/>}/>
                            </Switch>
                        </BrowserRouter>
                    </Provider>
                    <Copyrights>Copyrights by Vlad</Copyrights>
                </Wrapper>
            </>
        );
    }
}