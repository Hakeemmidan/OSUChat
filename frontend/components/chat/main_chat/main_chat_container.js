import { connect } from 'react-redux';
import { load } from '../../../actions/message_actions';
import { MainChat } from './MainChat';

const mapStateToProps = ({entities}) => {
  return {
    messages: entities.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadChat: (data) => dispatch(load(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainChat);