import React from 'react';
import './user-page.css';
import userImage from '../../images/user.png';
import {NavLink} from "react-router-dom";
import {follow} from "../../api/api";
import withLoader from '../../hoc/withLoader';
import Paginator from "../paginator/paginator";

const UserPage = ({ toggleFollow, followingInProgress, pageSize, totalUsersCount, users, currentPage, setCurrentPage }) => {
    return (
        <>
            <h1>UsersPage</h1>
            <Paginator pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       setCurrentPage={setCurrentPage}
                       currentPage={currentPage}
                       portionSize={10}
            />
            <ul className="list">
                {
                    users.map(({ id, name, followed, photos: { small } }) => {
                        return (
                            <li key={id} className="user">
                                <div className="image">
                                    <NavLink to={`profile/${id}`}>
                                        <img src={ small !== null ? small : userImage } alt="user"/>
                                    </NavLink>
                                </div>
                                <div>{ name }</div>
                                <button
                                    disabled={followingInProgress.some(uId => uId === id )}
                                    onClick={(url, config) => {
                                    if (!followed) {
                                        toggleFollow(id, "post");
                                    } else {
                                        toggleFollow(id, "delete");
                                    }
                                }}>{ followed ? "Unfollow" : "Follow"}</button>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default withLoader(UserPage, 'isFetching');

