import styled from 'styled-components';

import background from "../../assets/background.png";

export const Container = styled.div`
  max-width: 100%;
`;

export const Content = styled.div`
  height: 600px;

  .intro {
    background: url(${background}) no-repeat center;
    background-size: cover;
    height: 550px;
    text-align: center;
    padding-top: 200px;
    color: #e1e1e6;

    h1 {
      margin-top: 10px;
      font-size: 66px;
      text-align: center;
    }

    @media (max-width: 700px) {
      height: 400px;
      padding-top: 150px;
      h1 {
        margin-top: 0;
        font-size: 48px;
      }
    }
  }

`;