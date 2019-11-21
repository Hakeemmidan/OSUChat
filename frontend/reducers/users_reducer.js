import { SIGNUP_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case SIGNUP_CURRENT_USER:
      let nextState = Object.assign({}, state, { confirmationMsg: action.confirmationMsg });
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;