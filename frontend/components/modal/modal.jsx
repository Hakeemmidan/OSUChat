import React from 'react'
import { LoadingModal } from './modal_options/loading/loading_modal';
import UserOptionsModalContainer from './modal_options/user_options/user_options_modal_container';
import ChangeUsernameFormModalContainer from './modal_options/change_username/change_username_form_modal_container';

export function Modal({ modal, closeModal }) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'loading':
      component = <LoadingModal />
      break;
    case 'userOptions':
      component = <UserOptionsModalContainer />
      break;
    case 'changeUsername':
      component = <ChangeUsernameFormModalContainer />
      break;
    default:
      return null;
  }

  return (
    <div>
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </div>
  )
}
