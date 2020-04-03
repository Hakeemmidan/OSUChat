import React from 'react'
import { deleteUser } from '../../../../util/user_api_util';
import { Link } from 'react-router-dom';

export class UserOptionsModal extends React.Component {
  constructor(props) {
    super(props);
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