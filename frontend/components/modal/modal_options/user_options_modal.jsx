import React from 'react'

export function UserOptionsModal() {
    return (
      <div>
        <p className="link user-options__change-username">
          Change Username
        </p>

        <p className="link__red user-options__delete-account">
          Delete account
        </p>
      </div>
    )
}