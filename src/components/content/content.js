import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./proifle-info/profileInfo";

const Content = ({ state: { postsData } }) => {
    return (
        <div className={"main-content"}>
            <ProfileInfo />
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Content;