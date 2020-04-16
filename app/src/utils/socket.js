import io from "socket.io-client";

// const CHAT_SERVER = "http://77.120.108.119:9999";
const CHAT_SERVER = "http://localhost:9999";

const socket = io(CHAT_SERVER, {
    transport: ["polling"],
    path: "/chat/"
});


export const SEND_EVENTS_LIST = {
    sendMessage: "message",
    typing: "typing"
}

export const RECEIVE_EVENTS_LIST = {
    newMessage: "new-message",
    typing: "typing"
}

export default socket;