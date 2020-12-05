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
          {data.title}
          <ProjectDescription>
            {data.description}
          </ProjectDescription>
          <ProjectLink>
            data.url
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