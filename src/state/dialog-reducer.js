import {v4 as uuid} from "uuid";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const updateMessageActionCreator = (value) => ({ type: "UPDATE-NEW-MESSAGE", text: value });
const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" });

const initialState = {
    messagesData: [
        { id: uuid(), message: "Hello, how are you?" },
        { id: uuid(), message: "Can you help me ? " },
        { id: uuid(), message: "Get my dick inside" }
    ],
    dialogsData: [
        {id: uuid(), name: "Ivan"},
        {id: uuid(), name: "Andrew"},
        {id: uuid(), name: "Calvin"},
        {id: uuid(), name: "Dutch"}
    ],
    newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.text;
            break;
        case SEND_MESSAGE:
            const newMessage = {id: uuid(), message: state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            break;
    }

    return {...state};
}

export default dialogReducer;

export {
    updateMessageActionCreator,
    sendMessageActionCreator
}


