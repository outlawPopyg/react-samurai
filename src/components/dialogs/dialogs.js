import React from 'react';
import './dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <div className="dialog-item">
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}

const Message = ({message}) => {
    return <div className="dialog-message">{message}</div>
}

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "Kalim"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Calvin"},
        {id: 4, name: "Dutch"}
    ];

    const messagesData = [
        {id: 1, message: "Hello, how are you?"},
        {id: 2, message: "Can you help me ? "},
        {id: 3, message: "Get my dick inside"}
    ];

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
        </>
    );
}

export default Dialogs;