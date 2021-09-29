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
        { id: uuid(), name: "Ivan" },
        { id: uuid(), name: "Andrew" },
        { id: uuid(), name: "Calvin" },
        { id: uuid(), name: "Dutch" }
    ],
    newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.text
            };

        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: uuid(), message: state.newMessageText }],
                newMessageText: ""
            }

        default:
            return state;
    }
}

export default dialogReducer;

export {
    updateMessageActionCreator,
    sendMessageActionCreator
}


