import { authMeThunk } from "./auth-reducer";


const initialState = {
    initialized: false
};

const SET_INITIALIZE = "SET-INITIALIZE";
export const setInitialize = () => ({ type: SET_INITIALIZE });

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(authMeThunk())])
        .then(() => dispatch(setInitialize()));
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;