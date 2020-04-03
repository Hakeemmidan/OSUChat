import React from 'react'
import { deleteUser } from '../../../../util/user_api_util';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class UserOptionsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteAccount() {
    let currentUserId = this.props.currentUser.id;
    
    deleteUser(currentUserId)
  }

  render(){
    return (
      <div>
        <p onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          this.props.closeModal();
        }}>
          <Link className="link" to="/change-username">
            Change Username
          </Link> 

        </p>

        <p className="link__red user-options__delete-account">
          Delete account
        </p>
      </div>
    )
  }
}

UserOptionsModal.propTypes = {
  currentUser: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};