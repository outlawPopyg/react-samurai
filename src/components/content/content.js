import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./proifle-info/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Content = () => {
    return (
        <div className={"main-content"}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Content;