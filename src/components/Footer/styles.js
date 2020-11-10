import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: flex-end;
  
  footer {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      font-size: 22px;
      margin-left: 10px;
      transition: color 0.2s;
      &:hover {
        color: #81c043;
      }
    }
  }

`;