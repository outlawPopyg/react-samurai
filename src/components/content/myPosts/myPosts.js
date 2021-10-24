import React, {useCallback} from 'react';
import Post from "./post/post";
import './myPosts.css';
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../validators/validator";
import { withInput } from "../../inputs/textarea";

const maxLength10 = maxLengthCreator(10);

const MyPosts = ({ contentPage, onButtonClick }) => {

    const { postsData } = contentPage;

    const addNewPost = ({ postText }) => onButtonClick(postText);

    return (
        <div>
            <MyPostsFormRedux onSubmit={ addNewPost }/>
            <div>
                {
                    postsData.map( (data) => {
                        return <Post key={data.id} {...data} />
                    })
                }
            </div>
        </div>
    );
}

const MyPostsForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <h1>My posts</h1>
            <Field name={ "postText" }
                   type="text"
                   component={ withInput }
                   validate={ [ requiredField, maxLength10 ] }
            />
            <button className={"my-posts-button"} >Add new post</button>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({
    form: "postsForm"
})(MyPostsForm);

export default MyPosts;