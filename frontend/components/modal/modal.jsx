import React from 'react'
import { LoadingModal } from './modal_options/loading_modal';
import { UserOptionsModal } from './modal_options/user_options_modal';

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
      component = <UserOptionsModal />
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
