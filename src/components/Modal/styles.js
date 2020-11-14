import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalArea = styled.div`
   height: 90vh;
  width: 1200px;
  overflow-y: auto;
  padding: 20px;
  a {
    text-decoration: none;
    color: #81c043;
    transition: color 0.2s;
    &:hover {
      color: #6ba036;
    }
  }
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
  background: #1f1f1f;
  border-radius: 5px;
  .description {
    width: 900px;
    margin: 0 auto;
    p {
      line-height: 30px;
    }
  }
  .close-button {
    display: flex;
    justify-content: flex-end;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: #81c043;
    }
  }
  .imgs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
      width: 1100px;
      height: 500px;
      padding: 10px;
      border-radius: 2px;
    }
  }
  @media (max-width: 700px) {
    height: 90vh;
    width: 350px;
  
    padding: 0;
      p {
        line-height: 20px;
        font-size: 14px;
      }
      .imgs {
        img {
          width: 380px;
          height: 230px;
          padding: 0;
        }
      }
      .description {
        width: 300px;
      }
  }
`;