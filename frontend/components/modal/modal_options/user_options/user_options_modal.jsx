import React from 'react'
import { Link } from 'react-router-dom';

export function UserOptionsModal(props) {
    return (
      <div>
        <p onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          props.closeModal();
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