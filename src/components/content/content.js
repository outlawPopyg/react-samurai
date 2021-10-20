import React from 'react';
import ProfileInfo from "./proifle-info/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Content = (props) => {
    return (
        <div className={"main-content"}>
            <ProfileInfo { ...props } />
            <MyPostsContainer />
        </div>
    )
}

export default Content;