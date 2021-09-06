import React from 'react';
import MyPosts from "./myPosts/myPosts";

const Content = () => {
    return (
        <div className={"main-content"}>
            <div className="main-image">
                <img
                    src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}
                    alt="image"/>
            </div>
            <div>avatar + descr</div>
            <div>input</div>
            <MyPosts />
        </div>
    )
}

export default Content;