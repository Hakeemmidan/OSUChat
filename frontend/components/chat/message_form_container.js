import { connect } from 'react-redux';
import { speak } from '../../actions/message_actions';
import { MessageForm } from './MessageForm';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    speak: (data) => dispatch(speak(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);