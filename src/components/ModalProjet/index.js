import React from 'react';

import { 
  Container,
  ProjectArea,
  ProjectPhoto,
  ProjectInfoArea,
  ProjectDescription,
  ProjectLink,
  ProjectButton
} from './styles';

const ModalProject = ({ data }) => {


  return (
    <Container>
      <ProjectArea>
        <ProjectPhoto src={data.img} />

        <ProjectInfoArea>
          <h2>{data.title}</h2>
          
          <h3>Tecnologias:</h3>
          <p> {data.tecnology}</p>
          <ProjectDescription>
            <h3>Descrição do projeto:</h3>
            <p>{data.description}</p>
          </ProjectDescription>
          <ProjectLink>
            <h3>Link:</h3>
            <a target='blank' href={data.url}>Repositório Github</a>
            <br/>
            <a target='blank' href={data.site}>{data.site}</a>
          </ProjectLink>
        </ProjectInfoArea>

      </ProjectArea>

      <ProjectButton>
        X
      </ProjectButton>
    </Container>
  );
}

export default ModalProject;