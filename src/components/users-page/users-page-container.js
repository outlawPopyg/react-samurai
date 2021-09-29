import { connect } from "react-redux";
import {setUsersAC, toggleFollowAC} from "../../state/users-reducer";
import UsersPage from "./users-page";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);