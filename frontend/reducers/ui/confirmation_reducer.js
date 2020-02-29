import { SIGNUP_CURRENT_USER, RECEIVE_FORGOT_PASSWORD } from '../../actions/session_actions';
import { RECEIVE_UPDATE_USERNAME } from "../../actions/user_actions";

const confirmationReducer = (state = {}, action) => {
    let oldState = Object.freeze(state);

    switch (action.type) {
        case SIGNUP_CURRENT_USER:
            return { signupConfirmation: action.confirmationMsg[0] }
        case RECEIVE_FORGOT_PASSWORD:
            return { forgotPasswordConfirmation: action.confirmationMsg[0] }
        case RECEIVE_UPDATE_USERNAME:
            return { updateUsernameConfirmation: action.confirmationMsg[0] }
        default:
            return oldState;
    }
};

export default confirmationReducer;