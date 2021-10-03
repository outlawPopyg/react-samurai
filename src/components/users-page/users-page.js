import React, {Component} from 'react';
import axios from "axios";
import './user-page.css';
const USER_IMAGE = "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
const API_BASE = "https://social-network.samuraijs.com/api/1.0/users";

export default class UsersPage extends Component {

    componentDidMount() {
        axios.get(`${API_BASE}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`${API_BASE}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => this.props.setUsers(res.data.items));
        }
    }

    render() {
        const {
            pageSize, totalUsersCount, users, onToggleFollow,
            currentPage, setCurrentPage
        } = this.props;

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
                            className={ p === currentPage && "selectedPage"}
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

