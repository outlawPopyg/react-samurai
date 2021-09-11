import React from 'react';
import Post from "./post/post";

const MyPosts = ({ postsData }) => {

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