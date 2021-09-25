import React from 'react';
import './myPosts.css';
import { updateTextActionCreator, addPostActionCreator } from "../../../state/content-reducer";
import { connect } from "react-redux";
import MyPosts from "./myPosts";

const mapStateToProps = (state) => {
    return {
        contentPage: state.contentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: ({ target: { value } }) => dispatch(updateTextActionCreator(value)),
        onButtonClick: () => dispatch(addPostActionCreator())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

















