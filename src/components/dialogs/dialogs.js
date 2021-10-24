import React from 'react';
import './dialogs.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import withRedirect from "../../hoc/withRedirect";
import {Field, reduxForm} from "redux-form";
import { withTextArea } from "../inputs/textarea";
import { maxLengthCreator, requiredField } from "../../validators/validator";

const maxLength10 = maxLengthCreator(10);

const Dialogs = ({ isAuth, onSend, onMessage, dialogsPage }) => {

    const { dialogsData, messagesData } = dialogsPage;

    const addNewMessage = ({ newMessageText }) => {
        onSend(newMessageText);
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
            <Field
                name={"newMessageText"}
                component={ withTextArea }
                validate={[ requiredField, maxLength10 ]}
                type="text"
            />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "addMessageForm"
})(AddMessageForm);

export default withRedirect(Dialogs);