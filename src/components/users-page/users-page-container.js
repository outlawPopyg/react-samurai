import { connect } from "react-redux";
import {setUsersAC, toggleFollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../state/users-reducer";
import UsersPage from "./users-page";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);