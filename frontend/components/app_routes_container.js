import { connect } from 'react-redux';
import { AppRoutes } from './AppRoutes';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  };
};

export default connect(mapStateToProps, null)(AppRoutes);