import Dialogs from "./dialogs";
import { connect } from "react-redux";
import { sendMessageActionCreator } from "../../state/dialog-reducer";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSend: (value) => dispatch(sendMessageActionCreator(value))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);