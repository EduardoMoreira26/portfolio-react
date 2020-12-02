import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.status ? 'flex' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  max-height: 90vh;
  max-width: 95vw;
  overflow: auto;

  ::-webkit-scrollbar {
     width: 10px;
   }
   ::-webkit-scrollbar-thumb {
   background: #121214;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb:hover {
     box-shadow: inset 0 0 2px #81c043;
 }
`;