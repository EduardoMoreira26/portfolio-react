import React from 'react';

import { FiXCircle } from "react-icons/fi";


import { ModalBackground, ModalArea } from './styles';

const Modal = (props) => {

  const handleBackgroundClick = (event) => {
    if(event.target === event.currentTarget) {
      props.setVisible(false);
    }
  }

  
  return (
    <>
      
      {props.visible  &&
        <ModalBackground  onClick={handleBackgroundClick}>
       
      
                   <ModalArea >
                      <div className="close-button">
                        <FiXCircle onClick={handleBackgroundClick} size={44} />
                      </div>
                        <h1 >{props.title}</h1>

                      <div className="imgs">
                        <img src={props.img} alt={props.name} />
                      </div>

                      <div className="description">
                        <p>
                         {props.description}
                        </p>
                        <br />
                        <a href={props.url} target="blank">{props.nameurl}</a>
                      </div>
                    </ModalArea>
        
        </ModalBackground>
       }
    </>
    
    
  );
}

export default Modal;