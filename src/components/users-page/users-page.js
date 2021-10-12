import React from 'react';
import './user-page.css';
import userImage from '../../images/user.png';
import {NavLink} from "react-router-dom";

export default function UserPage({ pageSize, totalUsersCount, users, onToggleFollow, currentPage, setCurrentPage }) {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <>
            <h1>UsersPage</h1>
            <div className="numbers">
                { pages.map(p => {
                    return <span
                        onClick={() => setCurrentPage(p) }
                        className={ p === currentPage ? "selectedPage" : null }
                        key={p}>
                        {p}
                    </span>
                })}
            </div>
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
                                <button onClick={ () => onToggleFollow(id) }>{ followed ? "Unfollow" : "Follow"}</button>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}


