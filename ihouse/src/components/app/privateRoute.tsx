import React, {Component} from "react";
import styled from "styled-components";
import {Redirect, Route, RouteProps} from "react-router";
import {connect} from "react-redux";
import Header from "./header";

const InnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

interface IPrivateProps extends RouteProps {
    auth: boolean
}

class Private extends Component <IPrivateProps> {
    render() {
        console.log(this.props.auth);
        if (this.props.auth) {
            return (
                <>
                    <Header/>
                    <InnerWrapper>
                        <Route {...this.props} />
                    </InnerWrapper>
                </>
            )
        }
        return <Redirect to={"/sign"}/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, null)(Private);