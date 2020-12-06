import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width:  90vw;
  overflow-y: auto;
  background: #1f1f1f;
  border-radius: 5px;
  padding: 0 20px;
`;

export const ProjectArea = styled.div`
  height: 450px;
  display: flex;
 
`;

export const ProjectButton = styled.div`
  height: 50px;
  width: 50px;
  background-color: #033;
  margin: 30px auto;
`;

export const ProjectPhoto = styled.img`
  width: 200px;
  margin-left: 50px;
`;

export const ProjectInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-left: 100px;

  h2 {
    margin: 20px auto;
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
`;  

export const ProjectDescription = styled.div`
  height: 350px;
`;

export const ProjectLink = styled.div`
  height: 100px;
`;

          