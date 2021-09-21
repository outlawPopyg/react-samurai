import React from 'react';
import './dialogs.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../state/dialog-reducer";


const Dialogs = ({ state: { dialogsData, messagesData, newMessageText }, dispatch }) => {

    const onMessage = ({ target: { value }}) => dispatch(updateMessageActionCreator(value));

    const onSend = () => dispatch(sendMessageActionCreator());

    return (
        <>
            <h1>Dialogs</h1>
            <div className="dialogs">
                <div className="dialogs-items">
                    {
                        dialogsData.map((person) => {
                            return <DialogItem {...person} key={ person.id } />
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
                <input onChange={ onMessage } value={newMessageText} type="text"/>
                <button onClick={ onSend }>Send</button>
            </div>
        </>
    );
}

export default Dialogs;