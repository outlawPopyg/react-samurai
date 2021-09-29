import React from 'react';

const UsersPage = ({ users, onToggleFollow, setUsers }) => {

    return (
        <>
            <h1>UsersPage</h1>
            <ul>
                {
                    users.map(({ id, name, followed }) => {
                        return (
                            <li key={id}>
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

export default UsersPage;
