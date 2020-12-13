import React from 'react';

import { 
  Container, 
  ProjectPhotoArea, 
  ProjectPhoto, 
  ProjectInfoArea, 
  ProjectTitle,  
  ProjectSite 
} from './styles';

const PortfolioItem = ({ onClick, data }) => {

  const handleClick = () => {
    onClick(data);
  }

  return (
    <Container onClick={handleClick}>
      <ProjectPhotoArea>
        <ProjectPhoto src={data.img} alt="Imagem Projeto" />
      </ProjectPhotoArea>
      <ProjectInfoArea>
        <ProjectTitle>{data.title}</ProjectTitle>
        <ProjectSite>{data.tecnology}</ProjectSite>
      </ProjectInfoArea>
    </Container>
  );
}

export default PortfolioItem;