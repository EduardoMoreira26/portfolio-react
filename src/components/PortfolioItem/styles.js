import styled from 'styled-components';

export const Container = styled.div`
          
          border-radius: 5px;
          border: 1px solid #121214;
          height: 400px;
          width: 355px;
          background: #121214;
          transition: transform 0.2s;
          margin-bottom: 20px;

          &:hover {
          transform: translatey(-10px);
          border: 3px solid #81c043;
        }

        h2 {
          color: #fff;
        }

        strong {
          font-size: 24px;
          color: #e1e1e6;
        }
        p {
          color: #5f5f5f;
          font-size: 18px;
          font-weight: 500;
        }
    
        @media (max-width: 700px) {
          height: 400px;
          width: 305px;
          
        }
`;

export const ProjectPhotoArea = styled.div``;
export const ProjectPhoto = styled.img``;
export const ProjectInfoArea = styled.div``;
export const ProjectTitle = styled.div``;
export const ProjectSite = styled.div``;





