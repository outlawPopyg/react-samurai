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

    const copyState = {...state};

    // eslint-disable-next-line default-case
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            copyState.newMessageText = action.text;

            return copyState;

        case SEND_MESSAGE:
            const newMessage = { id: uuid(), message: copyState.newMessageText };
            copyState.messagesData = [...state.messagesData, newMessage ];
            copyState.newMessageText = "";

            return copyState;
    }

    return copyState;
}

export default dialogReducer;

export {
    updateMessageActionCreator,
    sendMessageActionCreator
}


