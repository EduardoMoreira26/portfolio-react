import React, { useState } from 'react';
import { ModalBackground, ModalArea } from './styles';

const Modal = (props) => {

  const handleBackroundClick = () => {
    props.setVisible(false);
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