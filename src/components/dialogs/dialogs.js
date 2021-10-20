import React from 'react';
import './dialogs.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import withRedirect from "../../hoc/withRedirect";


const Dialogs = ({ isAuth, onSend, onMessage, dialogsPage }) => {

    const { dialogsData, messagesData, newMessageText } = dialogsPage;

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

                <div className="divider" />

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

export default withRedirect(Dialogs);