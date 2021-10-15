import { connect } from "react-redux";
import {
    setUsers,
    onToggleFollow,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    setFollowing
} from "../../state/users-reducer";
import UsersPage from "./users-page";
import {Component} from "react";
import axios from "axios";
import Loader from "../loader/loader";
import {getUsers} from "../../api/api";
const API_BASE = "https://social-network.samuraijs.com/api/1.0/users";

class UserPageContainer extends Component {
    componentDidMount() {
        this.props.setFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(Math.round(data.totalCount / 5));
            })
            .finally(() => this.props.setFetching(false));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.setFetching(true);
            getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => this.props.setUsers(data.items))
                .finally(() => this.props.setFetching(false));
        }
    }

    render() {
        if (this.props.isFetching) {
            return <Loader />;
        }
        return <UsersPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

const mapDispatchToProps = {
    onToggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    setFollowing
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);