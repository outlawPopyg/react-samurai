import React from 'react';
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div>
            <h1>My posts</h1>
            <div>
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post"}/>
            </div>
        </div>
    );
}

export default MyPosts;