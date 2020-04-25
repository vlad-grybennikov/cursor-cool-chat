import {SignContainer} from "./sign.view";
import React, {Component, ReactEventHandler, ChangeEvent} from "react";
import Logo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import {connect} from "react-redux";
import {History} from "history";
import {AUTH} from "../../reducers/auth";

const DEFAULT_PHONE = "+380501234567";
const DEFAULT_PASSWORD = "cursor";

interface ISignProps {
    signIn(): any,
    history: History
}

interface ISignState {
    phone: string;
    password: string;
    [field: string]: string;
}

const dispatchProps = (dispatch) => ({
    signIn() {
        dispatch({
            type: "LOGGED"
        })
    }
})

class Sign extends Component<ISignProps, ISignState>{
    state = {
        phone: "",
        password: ""
    }

    signIn = () => {
        const {phone, password} = this.state;
        //await server.post({ password, phone });
        if(phone === DEFAULT_PHONE && password === DEFAULT_PASSWORD){
            this.props.signIn();
            localStorage.setItem(AUTH, JSON.stringify(true))
            this.props.history.push("/");
        } else {
            alert("Wrong phone or password");
        }
    }

    changeInput = (e: any) => {
        const {dataset, value} = e.target;
        this.setState({
            [dataset.field]: value
        })
    }

    render(){
        const {phone, password} = this.state;
        return (
            <SignContainer>
                <Logo />
                <Input placeholder="Phone"
                       value={phone}
                       data-field="phone"
                       autoComplete="off"
                       onChange={this.changeInput}
                />
                <Input type="password"
                       placeholder="Password"
                       data-field="password"
                       onChange={this.changeInput}
                       autoComplete="off"
                       value={password}
                />
                <Button onClick={this.signIn}>Sign In</Button>
            </SignContainer>
        );
    }
}

export default connect(null, dispatchProps)(Sign);