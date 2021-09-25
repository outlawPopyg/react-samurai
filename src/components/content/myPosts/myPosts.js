import React, {useEffect} from 'react';
import Post from "./post/post";
import './myPosts.css';


const MyPosts = ({ contentPage, onButtonClick, onChangeInput }) => {

    const { newPostText, postsData } = contentPage;

    return (
        <div>
            <h1>My posts</h1>
            <input value={ newPostText } onChange={ onChangeInput } type="text"/>
            <button className={"my-posts-button"} onClick={ onButtonClick }>Add new post</button>
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