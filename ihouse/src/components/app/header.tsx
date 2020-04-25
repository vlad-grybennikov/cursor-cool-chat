import React, {Component} from "react";
import {withRouter} from "react-router";
import styled from "styled-components";
import {MENU} from "./app";
import {NavLink} from "react-router-dom";
import Logo from "../common/logo";
import {AUTH} from "../../reducers/auth";
import {connect} from "react-redux";
import {History} from "history";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color:#fff;
  border-bottom: 4px solid #765d9f;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
const HeaderItem = styled(NavLink)`
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    margin-right: 30px;
    display: block;
    &:nth-child(2){
      margin-left: 30px;
    }
    &:visited{
      color: #333;
    }
    &.active{
        border-bottom: 2px solid #765d9f;
    }
    &:hover{
      color: #765d9f;
    }
`;

const ExitItem = styled.div`
  color: #999;
  text-decoration:underline;
  font-size: 16px;
  margin-left: auto;
  cursor:pointer;
`;

const dispatchToProps = (dispatch) => ({
    signOut(){
        dispatch({
            type: "UNLOGGED"
        });
    }
})

interface IHeaderProps{
    signOut(): any,
    history: History
}

export default withRouter(connect(null, dispatchToProps)(class Header extends Component<IHeaderProps> {
    signOut = () => {
        localStorage.removeItem(AUTH);
        this.props.signOut();
        this.props.history.push("/sign");
    }

    render() {
        return (
            <HeaderWrapper>
                <NavLink to={"/"}>
                <Logo size={120}/>
                </NavLink>
                {MENU.map(({name, path}) => (
                    <HeaderItem to={path}>
                        {name}
                    </HeaderItem>
                ))}
                <ExitItem onClick={this.signOut}>Sign Out</ExitItem>
            </HeaderWrapper>
        )
    }
}));