import React from 'react';
import styled from "styled-components";
import socket, {RECEIVE_EVENTS_LIST, SEND_EVENTS_LIST} from "../utils/socket";
import Message from "./message";

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color:#eaeaea;
  display: flex;
  font-size: 12px;
  flex-direction: column-reverse;
  font-family: "Helvetica";
  font-weight: 300;
  position: relative;
`;

const MessageInputWrapper = styled.div`
  display: flex;
  height: 30px;
`;

const MessageInput = styled.input`
  flex: 1;
  height: 100%;
  padding-left: 5px;
  border: none;
  color: #777;
  font-size: 12px;
  outline: none;
  &:focus{
    outline: none;
  }
`;

const MessageSendButton = styled.button`
  background-color:#d18228;
  color: #fff;
  width: 50px;
  height: 100%;
  border: none;
`;

const Typing = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: #c3c3c3;
  font-size: 10px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
`;

const OnlineCircle = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${props => props.isOnline ? "#4fff89" : "#ff4a5c"};
`;

const Online = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const OnlineCount = styled.div`
  color:#4fff89;
  margin-right: 5px;
  font-size: 10px;
`;

export default class Chat extends React.Component {
    state = {
        message: "",
        typing: false,
        isOnline: false,
        messagesList: [],
        count: 0,
        name: "Инкогнито"
    }

    componentDidMount(){
        const name = prompt("Введите ваше имя!", "Инкогнито");
        this.setState({
            name
        });
        document.body.addEventListener("keypress", (e) => {
            const {keyCode} = e;
            if(keyCode === 13){
                this.addMessage();
            }
        });
        socket.on("connect", () => {
            this.setState({
                isOnline: true
            });
        });
        socket.on("disconnect", () => {
            this.setState({
                isOnline: false
            })
        })
        socket.on("user-connected", (count) => {
            this.setState({
                count
            })
        });
        socket.on("user-disconnected", (count) => {
            this.setState({
                count
            })
        })
        socket.on("new-tweet", (tweet) => {
           console.log(tweet) ;
        });
        socket.on(RECEIVE_EVENTS_LIST.newMessage, ({message, name}) => {
            this.setState((prevState) => {
                return {
                    messagesList: [{ text: message, name }, ...prevState.messagesList]
                }
            })
        });
        socket.on(RECEIVE_EVENTS_LIST.typing, (isTyping) => {
            this.setState({
                typing: isTyping
            })
        })
    }

    startTyping = () => {
        socket.emit(SEND_EVENTS_LIST.typing, true);
    }

    endTyping = () => {
        socket.emit(SEND_EVENTS_LIST.typing, false);
    }

    addMessage = () => {
        const {message, name} = this.state;
        if(!message.length) return;
        this.setState((prevState) => ({
            messagesList: [{ text: message, name, sent: true }, ...prevState.messagesList],
            message: ""
        }));
        socket.emit(SEND_EVENTS_LIST.sendMessage, {message, name});
        this.input.blur();
    }

    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const {message, messagesList, typing, isOnline, count} = this.state;
        return (
            <Wrapper>
                <MessageInputWrapper>
                    <MessageInput value={message}
                                  onFocus={this.startTyping}
                                  onBlur={this.endTyping}
                                  ref={(input) => this.input = input}
                                  onChange={this.changeMessage}
                    />
                    <MessageSendButton onClick={this.addMessage}>Send</MessageSendButton>
                </MessageInputWrapper>
                {typing && <Typing>Кто-то, что-то пишет...</Typing>}
                {messagesList.map((message, index) => (
                    <Message key={index.toString()} sent={message.sent} name={message.name}>
                        {message.text}
                    </Message>
                ))}
                <Online>
                    {isOnline && <OnlineCount>{count}</OnlineCount>}
                    <OnlineCircle isOnline={isOnline}/>
                </Online>
            </Wrapper>
        )
    }
}
