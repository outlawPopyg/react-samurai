import {v4 as uuid} from "uuid";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        { id: uuid(), followed: false, name: "Claim", status: "I like football", location: { city: "Kazan", country: "Russia"} },
        { id: uuid(), followed: false, name: "Ivan", status: "I'm looking for job", location: { city: "Moscow", country: "Russia"} },
        { id: uuid(), followed: true, name: "Rick", status: "Hello", location: { city: "Arkansas", country: "USA"} }
    ]
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