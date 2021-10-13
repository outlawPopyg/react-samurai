import React from 'react';
import './user-page.css';
import userImage from '../../images/user.png';
import {NavLink} from "react-router-dom";
import axios from "axios";

const API_BASE = "https://social-network.samuraijs.com/api/1.0";


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
                                <button onClick={(url, config) => {
                                    if (!followed) {
                                        axios.post(`${API_BASE}/follow/${id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d7a22d46-2b9f-4ab6-9764-bdb9ae134d6d"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    onToggleFollow(id);
                                                }
                                            })
                                    } else {
                                        axios.delete(`${API_BASE}/follow/${id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d7a22d46-2b9f-4ab6-9764-bdb9ae134d6d"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    onToggleFollow(id);
                                                }
                                            })
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


