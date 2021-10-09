import { connect } from "react-redux";
import {
    setUsers,
    onToggleFollow,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
} from "../../state/users-reducer";
import UsersPage from "./users-page";
import {Component} from "react";
import axios from "axios";
import Loader from "../loader/loader";
const API_BASE = "https://social-network.samuraijs.com/api/1.0/users";

class UserPageContainer extends Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`${API_BASE}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(Math.round(res.data.totalCount / 5));
            })
            .finally(() => this.props.setFetching(false));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.setFetching(true);
            axios.get(`${API_BASE}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => this.props.setUsers(res.data.items))
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
        isFetching: state.usersPage.isFetching
    };
};

const mapDispatchToProps = {
    onToggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);