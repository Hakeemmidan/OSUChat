import React from 'react'

export function UserOptionsModal(props) {
    return (
      <div>
        <p className="link" onClick={e => {
          e.stopPropagation
          props.openModal('changeUsername')
        }}>
          Change Username
        </p>

        <p className="link__red user-options__delete-account">
          Delete account
        </p>
      </div>
    )
}