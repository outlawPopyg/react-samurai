import React from 'react';
import './dialogs.css';
import { NavLink } from "react-router-dom";
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";


const Dialogs = ({ state: { dialogsData, messagesData, newMessageText } }) => {

    return (
        <>
            <h1>Dialogs</h1>
            <div className="dialogs">
                <div className="dialogs-items">
                    {
                        dialogsData.map((person) => {
                            return <DialogItem { ...person } />
                        })
                    }
                </div>

                <div className="divider"></div>

                <div className="dialog-messages">
                    {
                        messagesData.map(({id, message}) => {
                            return <Message key={id} id={id} message={message} />
                        })
                    }
                </div>
            </div>
            <div className="dialogs-input">
                <input value={newMessageText} type="text"/>
                <button>Send</button>
            </div>
        </>
    );
}

export default Dialogs;