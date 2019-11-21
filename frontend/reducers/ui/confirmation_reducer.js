import { SIGNUP_CURRENT_USER } from '../../actions/session_actions';

const confirmationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SIGNUP_CURRENT_USER:
            return { signupConfirmation: action.confirmationMsg[0] }
        default:
            return state;
    }
};

export default confirmationReducer;