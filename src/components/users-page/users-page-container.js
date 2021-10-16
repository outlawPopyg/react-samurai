import { connect } from "react-redux";
import {
    onToggleFollow, setCurrentPage, setFollowing, getUsersThunk, toggleFollowUserThunk
} from "../../state/users-reducer";
import UsersPage from "./users-page";
import {Component} from "react";
import Loader from "../loader/loader";

class UserPageContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
    setCurrentPage,
    setFollowing,
    getUsers: getUsersThunk,
    toggleFollow: toggleFollowUserThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);