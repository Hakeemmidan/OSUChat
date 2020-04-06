import React from 'react'
import { deleteUser } from '../../../../util/user_api_util';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class UserOptionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteAccount = this.handleDeleteAccount.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  handleDeleteAccount(e) {
    e.preventDefault();
    e.stopPropagation();
    let currentUserId = this.props.currentUser.id;

    if (confirm("Are you sure you want to delete your account?")) {
      deleteUser(currentUserId)
        .then(() => 
          this.props.logout()
            .then(() =>
              this.props.openModal('deleteAccount')
            )
        )
    }
  }

  handleChangeUsername(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.closeModal();
  }

  render(){
    return (
      <div>
        <p onClick={this.handleChangeUsername}>
          <Link className="link" to="/change-username">
            Change Username
          </Link> 

        </p>

        <p onClick={this.handleDeleteAccount} className="link__red user-options__delete-account">
          Delete account
        </p>
      </div>
    )
  }
}

UserOptionsModal.propTypes = {
  currentUser: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};