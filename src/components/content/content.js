import React from 'react';
import ProfileInfo from "./proifle-info/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Content = ({ userInfo }) => {
    return (
        <div className={"main-content"}>
            <ProfileInfo userInfo={ userInfo }/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;