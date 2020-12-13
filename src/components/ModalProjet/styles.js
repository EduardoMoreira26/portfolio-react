import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width:  90vw;
  overflow-y: auto;
  background: #1f1f1f;
  border-radius: 5px;
  padding: 0 20px;

  @media (max-width: 700px) {
    padding: 0;
    
  }
`;

export const ProjectArea = styled.div`
  height: 450px;
  display: flex;

  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;

export const ProjectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  svg {
    color: #81c043;
    cursor: pointer;
    margin-top: 40px;
    transition: .2s;

    &:hover {
      color:#93e02f;
    }
  }

  @media (max-width: 700px) {
    padding-bottom: 20px ;
    margin-top: 220px;
  }
`;

export const ProjectPhoto = styled.img`
  max-width: 200px;
  margin-left: 50px;

  @media (max-width: 700px) {
    max-width: 100px;
    margin: 10px 0 0 0;
  }
`;

export const ProjectInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  h2 {
    margin: 20px 0 40px 0
  }

  h3 {
    margin-bottom: 4px;
  }

  p {
    color: #5f5f5f;
    margin-bottom: 10px;

  }

  strong {
    margin-bottom: 20px;
    color: #5f5f5f;
  }

  a {
    text-decoration: none;
    color: #81c043;
    transition: all ease .2s;
    

    &:hover {
      color:#93e02f;
    }
  }

  @media (max-width: 700px) {
    flex: none;
    display: block;
    flex-direction: none;
    margin-left: 0;

    h2 {
    margin: 20px 0;
    }
  }
`;  

export const ProjectDescription = styled.div`
  max-width: 800px;
  max-height: 900px;
  line-height: 22px;

  p {
    margin: 15px 0;
  }

  @media (max-width: 700px) {
    max-width: 320px;
    max-height: 400px;
    line-height: 22px;
  }
`;

export const ProjectLink = styled.div`
  max-height: 100px;

`;

