import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./proifle-info/profileInfo";

const Content = ({ state: { postsData, newPostText }, dispatch }) => {
    return (
        <div className={"main-content"}>
            <ProfileInfo />
            <MyPosts postsData={postsData}
                     dispatch={dispatch}
                     newPostText={newPostText}
            />
        </div>
    )
}

export default Content;