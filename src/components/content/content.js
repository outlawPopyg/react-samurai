import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./proifle-info/profileInfo";

const Content = () => {
    return (
        <div className={"main-content"}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Content;