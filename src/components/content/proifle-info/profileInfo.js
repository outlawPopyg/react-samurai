import React from 'react';
import Loader from "../../loader/loader";
import {Redirect} from "react-router-dom";
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({ userInfo, isAuth, id }) => {

    if (!isAuth) {
        return <Redirect to="/login" />
    }

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
            <ProfileStatus id={id}/>
        </>
    );


}

export default ProfileInfo;