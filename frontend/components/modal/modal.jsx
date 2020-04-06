import React from 'react'
import { LoadingModal } from './modal_options/loading/loading_modal';
import { Ciao } from'./modal_options/ciao/Ciao';
import UserOptionsModalContainer from './modal_options/user_options/user_options_modal_container';

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
    case 'deleteAccount':
      component = <Ciao />
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
