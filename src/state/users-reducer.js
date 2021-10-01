const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: []
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
                users: [ ...state.users, ...action.users ]
            };

        default: return state;
    }
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;