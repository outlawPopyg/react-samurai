import React from 'react';
import Dialogs from "./dialogs";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../state/dialog-reducer";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessage: ({ target: { value } }) =>  dispatch(updateMessageActionCreator(value)),
        onSend: () => dispatch(sendMessageActionCreator())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);