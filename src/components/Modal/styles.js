import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
`;