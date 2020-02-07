export const RECEIVE_SPEAK_MESSAGE = 'RECEIVE_SPEAK_MESSAGE';
export const RECEIVE_LOAD_MESSAGES = 'RECEIVE_LOAD_MESSAGES';
import * as MessageAPIUtil from '../util/message_api_util';

export const receiveSpeakMessage = (message) => ({
  type: RECEIVE_SPEAK_MESSAGE,
  message
});

export const receiveLoadMessages = (data) => ({
  type: RECEIVE_LOAD_MESSAGES,
  data
});

export const speak = message => dispatch => (
  MessageAPIUtil.speak(message).then(message => (
    dispatch(receiveSpeakMessage(message))
  ))
);

export const load = data => dispatch => (
  MessageAPIUtil.load(data).then(messages => (
    dispatch(receiveLoadMessages(messages))
  ))
);