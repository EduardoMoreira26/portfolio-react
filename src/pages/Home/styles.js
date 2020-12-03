import styled from 'styled-components';

import background from "../../assets/background.png";

export const Container = styled.div`
  max-width: 100%;
`;

export const Content = styled.div`
  button {
    cursor: pointer;
  }

  h1 {
    margin: 20px 10px 0 0;
    font-size: 36px;
    
    &:after {
          content: "";
          display: block;
          background: #fff;
          height: 3px;
          width: 20px;
          margin: 8px auto;
        }
    }

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

  .titleProjetos {
    text-align: center;
    padding: 20px 10px;


    h1 {
    margin: 20px 10px 0 0;
    font-size: 36px;
    
    }
    strong {
      color: #5f5f5f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: italic;
    }
  }

  

  .background-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      border-radius: 5px;
      text-align: center;
      border: 1px solid #1f1f1f;
      max-width: 100%;
      padding: 20px;

    .card {
          border-radius: 5px;
          border: 1px solid #121214;
          height: 400px;
          width: 355px;
          background: #121214;
          transition: transform 0.2s;

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
    }

    img {
          width: 345px;
          height: 300px;
          margin-bottom: 10px;
          border-radius: 2px;
        }

        
    @media (max-width: 700px) {
      .card {
          
          height: 400px;
          width: 305px;
          
    }

    img {
          width: 300px;
          height: 300px;
        
        }
    }
  }

  .section_cursos {
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    @media (max-width: 700px) {
      margin: 10px;
    }
  }
`;

export const PortfolioArea = styled.div`
  
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    background: #1f1f1f;
    border-radius: 5px;
    
  
`;


export const ContactContainer = styled.section`
  
    background: #1f1f1f;
    margin-top: 20px;
    padding: 60px 0;

    .container_card {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .contact_card {
        border: 1px solid #fff;
        height: 200px;
        width: 360px;
        text-align: center;
        padding: 40px 0;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #121214;
        background: #121214;
        box-shadow: 0 0 0 2px #000;

        h2::after {
          content: "";
          display: block;
          background: #fff;
          height: 3px;
          width: 20px;
          margin: 8px auto;
        }

        a {
          text-decoration: none;
          color: #5f5f5f;

          .devicon-github-plain,
          .devicon-linkedin-plain {
            font-size: 3em;
            transition: color 0.2s;
            margin-right: 10px;
            color: #81c043;

            &:hover {
              color: #81c033;
            }
          }
        }
      }
    }

    @media (max-width: 700px) {
      background: #1f1f1f;
      margin-top: 0;
      padding: 0;

      .container_card {
        padding: 20px;

      }
    }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

// export const ModalArea = styled.div`
//   /* height: 90vh;
//   width: 1200px;
//   overflow-y: auto;
//   padding: 20px;
//   a {
//     text-decoration: none;
//     color: #81c043;
//     transition: color 0.2s;
//     &:hover {
//       color: #6ba036;
//     }
//   }
//   ::-webkit-scrollbar {
//     width: 10px;
//   }
//   ::-webkit-scrollbar-thumb {
//     background: #121214;
//     border-radius: 10px;
//   }
//   ::-webkit-scrollbar-thumb:hover {
//     box-shadow: inset 0 0 2px #81c043;
//   }
//   background: #1f1f1f;
//   border-radius: 5px;
//   .description {
//     width: 900px;
//     margin: 0 auto;
//     p {
//       line-height: 30px;
//     }
//   }
//   .close-button {
//     display: flex;
//     justify-content: flex-end;
//     transition: color 0.2s;
//     cursor: pointer;
//     &:hover {
//       color: #81c043;
//     }
//   }
//   .imgs {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     img {
//       width: 1100px;
//       height: 500px;
//       padding: 10px;
//       border-radius: 2px;
//     }
//   }
//   @media (max-width: 700px) {
//     height: 90vh;
//     width: 350px;
  
//     padding: 0;
//       p {
//         line-height: 20px;
//         font-size: 14px;
//       }
//       .imgs {
//         img {
//           width: 380px;
//           height: 230px;
//           padding: 0;
//         }
//       }
//       .description {
//         width: 300px;
//       }
//   } */
// `;

export const Skills = styled.section`
   
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;

    h1 {
    margin: 40px 10px 0 0;
    font-size: 36px;
 
    }

    strong {
      color: #5f5f5f;
      font-style: italic;
      margin: 0 20px 10px 10px;
    }
    .skills {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      padding-top: 40px;
      .devicon-docker-plain,
      .devicon-css3-plain,
      .devicon-bootstrap-plain,
      .devicon-express-original,
      .devicon-html5-plain,
      .devicon-javascript-plain,
      .devicon-nodejs-plain,
      .devicon-react-original,
      .devicon-typescript-plain {
        font-size: 6em;
      }
      h2 {
        color: #5f5f5f;
        margin: 20px 0;
      }
      p {
        color: #e1e1e6;
        line-height: 25px;
      }

  }

  @media (max-width: 700px) {
    
    margin: 0;




    .skills {
      margin: 0;
      padding-top: 40px;
      .devicon-docker-plain,
      .devicon-css3-plain,
      .devicon-bootstrap-plain,
      .devicon-express-original,
      .devicon-html5-plain,
      .devicon-javascript-plain,
      .devicon-nodejs-plain,
      .devicon-react-original,
      .devicon-typescript-plain {
        font-size: 3em;
      }
    }
  }

  
`;

export const Card = styled.div`
  width: 600px;
  height: 200px;
  text-align: center;
`;

export const CardCursos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  height: 300px;
  border-radius: 5px;
  background: #121214;
  border: 3px solid #000; 

  

  &:nth-child(-n+4):after {
    content: "";
    display: block;
    width: 3px;
    height: 40px;
    background: #000;
    margin-top: 340px;
    position: absolute;
  }


  .infoCursos {
    width: 600px;
    margin: 0 auto;
    
  }

  img {
    width: 80px;
    height: 80px;

  }

  h2 {
    color: #5f5f5f;
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    margin-bottom: 40px;
    margin-top: 0;
    margin-right:  10px;
    margin-left:  10px;

    .infoCursos {
    width: 280px;
    text-align: center;
    font-size: 14px;

    img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
    padding-left: 10px;
    background: #e44;
        }
    
    }
  }

  
`;

