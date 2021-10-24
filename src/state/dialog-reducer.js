import {v4 as uuid} from "uuid";
const SEND_MESSAGE = "SEND-MESSAGE";

const sendMessageActionCreator = (value) => ({ type: "SEND-MESSAGE", value });

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
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            const message = action.value;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: uuid(), message }]
            }

        default:
            return state;
    }
}

export default dialogReducer;

export {
    sendMessageActionCreator
}


