import { connect } from "react-redux";
import {
    onToggleFollow, setCurrentPage, setFollowing, getUsersThunk, toggleFollowUserThunk
} from "../../state/users-reducer";
import UsersPage from "./users-page";
import {Component} from "react";
import Loader from "../loader/loader";
import withLoader from "../../hoc/withLoader";

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
        return <UsersPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
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