import { connect } from "react-redux";
import {
    onToggleFollow, setCurrentPage, setFollowing, getUsersThunk, toggleFollowUserThunk
} from "../../state/users-reducer";
import UsersPage from "./users-page";
import {Component} from "react";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersReselect
} from "../../selectors/selectors";

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
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
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