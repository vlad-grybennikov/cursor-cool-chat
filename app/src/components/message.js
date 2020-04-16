import styled from "styled-components";
import React, {Component} from "react";
import {random} from "lodash";

export const randomColor = () => {
    const red = random(0, 255);
    const blue = random(0, 255);
    const green = random(0, 255);
    return `rgb(${red}, ${blue}, ${green})`;
}
const sentColor = randomColor();
const receiveColor = randomColor();

const MessageOuterWrapper = styled.div`
  width: 90%;
  margin-left: ${props => props.sent ? "20px" : "auto"};
  margin-right: ${props => props.sent ? "auto" : "20px"};
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${props => props.sent ? "row" : "row-reverse"};
`;

const MessageWrapper = styled.div`
  background-color: ${props => props.sent ? sentColor : receiveColor};
  border-radius: 50px;
  box-sizing: border-box;
  padding: 20px;
  flex:1;
`;


const Avatar = styled.div`
  border-radius: 50%;
  background-color:${randomColor()};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export default class Message extends Component {
    render() {
        const {children, sent, name} = this.props;
        return (
            <MessageOuterWrapper sent={sent}>
                <Avatar>{name && name[0] && name[0].toUpperCase()}</Avatar>
                <MessageWrapper sent={sent}>
                    {children}
                </MessageWrapper>
            </MessageOuterWrapper>
        );
    }
}