import React, {useEffect} from 'react';
import Post from "./post/post";
import './myPosts.css';
import { updateTextActionCreator, addPostActionCreator } from "../../../state/state";


const MyPosts = ({ postsData, newPostText, dispatch }) => {

    const onChangeInput = ({ target: { value } }) => {
        dispatch(updateTextActionCreator(value));
    }

    return (
        <div>
            <h1>My posts</h1>
            <input value={newPostText} onChange={ onChangeInput } type="text"/>
            <button className={"my-posts-button"} onClick={ () => dispatch(addPostActionCreator()) }>Add new post</button>
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

export default MyPosts;