import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./proifle-info/profileInfo";

const Content = ({ state: { postsData, newPostText }, addPost, updateNewPostText }) => {
    return (
        <div className={"main-content"}>
            <ProfileInfo />
            <MyPosts postsData={postsData}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     newPostText={newPostText}
            />
        </div>
    )
}

export default Content;