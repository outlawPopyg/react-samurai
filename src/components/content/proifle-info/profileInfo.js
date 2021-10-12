import React from 'react';
import Loader from "../../loader/loader";

const ProfileInfo = ({ userInfo }) => {
    if (!userInfo) {
        return <Loader />
    }

    const { fullName, photos: { large }, aboutMe } = userInfo;
    return (
        <>
            <div className="main-image">
                <img src={ large } alt="main" />
            </div>
            <h1>{ fullName }</h1>
            <div>{ aboutMe }</div>
        </>
    );


}

export default ProfileInfo;