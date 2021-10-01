import React, {Component} from 'react';
import axios from "axios";
import './user-page.css';
const USER_IMAGE = "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"

export default class UsersPage extends Component {

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => this.props.setUsers(res.data.items));
    }

    render() {
        const { users, onToggleFollow } = this.props;

        return (
            <>
                <h1>UsersPage</h1>
                <button onClick={ this.getUsers }>Get users</button>
                <ul>
                    {
                        users.map(({ id, name, followed, photos: { small } }) => {
                            return (
                                <li key={id} className="user">
                                    <div className="image">
                                        <img src={ small !== null ? small : USER_IMAGE } alt=""/>
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
}

