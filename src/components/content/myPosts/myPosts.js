import React from 'react';
import Post from "./post/post";
import './myPosts.css';

const MyPosts = ({ postsData }) => {

    const addPost = () => {
        alert(inputElement.current.value);
    }

    const inputElement = React.createRef();

    return (
        <div>
            <h1>My posts</h1>
            <input ref={inputElement} type="text"/>
            <button onClick={ addPost }>Add new post</button>
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