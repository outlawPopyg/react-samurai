import React from 'react';
import './dialogs.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import withRedirect from "../../hoc/withRedirect";
import {Field, reduxForm} from "redux-form";


const Dialogs = ({ isAuth, onSend, onMessage, dialogsPage }) => {

    const { dialogsData, messagesData, newMessageText } = dialogsPage;

    const addNewMessage = () => {
        console.log("new message");
    }

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
                <AddMessageFormRedux onSubmit={ addNewMessage }/>
            </div>
        </>
    );
}

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <Field name={"newMessageText"} component={"input"} type="text"/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "addMessageForm"
})(AddMessageForm);

export default withRedirect(Dialogs);