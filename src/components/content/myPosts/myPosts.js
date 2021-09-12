import React, {useEffect} from 'react';
import Post from "./post/post";
import './myPosts.css';

const MyPosts = ({ postsData, addPost, updateNewPostText, newPostText }) => {

    const onChangeInput = ({ target: { value } }) => {
        updateNewPostText(value);
    }

    return (
        <div>
            <h1>My posts</h1>
            <input value={newPostText} onChange={ onChangeInput } type="text"/>
            <button onClick={() => addPost(newPostText)}>Add new post</button>
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