import React from 'react';

import { ModalBackground, ModalArea } from './styles';

const Modal = (props) => {

  const handleBackroundClick = (event) => {
    if(event.target === event.currentTarget) {
      props.setVisible(false);

    }
  }

  return (
    <>
      {props.visible  &&
        <ModalBackground onClick={handleBackroundClick}>
        <ModalArea>
          {props.children}
        </ModalArea>
      </ModalBackground>
    }
    </>
    
    
  );
}

export default Modal;