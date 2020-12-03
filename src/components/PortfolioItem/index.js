import React from 'react';

import { 
  Container, 
  ProjectPhotoArea, 
  ProjectPhoto, 
  ProjectInfoArea, 
  ProjectTitle, 
  ProjectDescription, 
  ProjectUrl, 
  ProjectSite 
} from './styles';

const PortfolioItem = ({ data }) => {


  return (
    <Container>
      <ProjectPhotoArea>
        <ProjectPhoto src={data.img} />
      </ProjectPhotoArea>
      <ProjectInfoArea>
        <ProjectTitle>{data.title}</ProjectTitle>
        <ProjectDescription>{data.description}</ProjectDescription>
        <ProjectUrl>{data.url}</ProjectUrl>
        <ProjectSite>{data.site}</ProjectSite>
      </ProjectInfoArea>
    </Container>
  );
}

export default PortfolioItem;