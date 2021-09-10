import React from 'react';
import Post from "./post/post";

const MyPosts = () => {

    const postsData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 9}
    ];

    return (
        <div>
            <h1>My posts</h1>
            <input type="text"/>
            <button>Add new post</button>
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