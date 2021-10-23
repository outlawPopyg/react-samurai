import {follow, getStatus, getUsers, setStatus } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_FETCHING = "SET-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";
const GET_STATUS = "GET-STATUS";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    followingId: null,
    status: ""
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FOLLOW:
            const { users } = state;
            const element = users.find(el => el.id === action.userId);

            return {
                ...state,
                users: [
                    ...users.slice(0, users.findIndex(el => el.id === action.userId)),
                    { ...element, followed: !element.followed },
                    ...users.slice(users.findIndex(el => el.id === action.userId) + 1)
                ]
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.followingId] :
                    state.followingInProgress.filter(id => id !== action.followingId)
            }

        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: return state;
    }
}

export const onToggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching });
export const setFollowing = (followingInProgress, followingId) => ({ type: FOLLOWING_IN_PROGRESS, followingInProgress, followingId });
export const setProfileStatus = (status) => ({ type: GET_STATUS, status });

export const getUserStatusThunk = (id) => (dispatch) => {
    getStatus(id)
        .then(response => dispatch(setProfileStatus(response)));
}

export const setUserStatusThunk = (status) => (dispatch) => {
    setStatus(status)
        .then(response => dispatch(setProfileStatus(status)));
}

export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(setFetching(true));

    getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(Math.round(data.totalCount / 5)));
        })
        .finally(() => dispatch(setFetching(false)));
}

export const toggleFollowUserThunk = (id, method) => (dispatch) => {
    dispatch(setFollowing(true, id));
    follow(id, method)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(onToggleFollow(id));
            }
        }).finally(() => dispatch(setFollowing(false, id)));
}






export default usersReducer;