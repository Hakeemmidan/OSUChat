import {
  RECEIVE_SPEAK_MESSAGE,
  RECEIVE_LOAD_MESSAGES
} from "../../actions/message_actions";

export const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  let messagesObj;

  switch (action.type) {
    case RECEIVE_SPEAK_MESSAGE:
      nextState = Object.assign({}, oldState, {
        [action.message.id]: action.message
      });
      return nextState;
    case RECEIVE_LOAD_MESSAGES:
      messagesObj = action.data.messages.reduce(
        (obj, msg) => Object.assign(obj, { [msg.id]: msg }), {}
      );
      nextState = Object.assign({}, oldState, messagesObj);
      return nextState
    default:
      return oldState;
  }
};