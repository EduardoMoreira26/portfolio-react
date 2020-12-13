import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import data from '../../components/App/data';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import PortfolioItem from '../../components/PortfolioItem';
import ModalProject from '../../components/ModalProjet';

import TimeLine from '../../components/TimeLine';


import { 
  Container, 
  Content, 
  Skills, 
  Card, 
  ContactContainer, 
  PortfolioArea, 
  PortfolioList,
  StudyArea 
} from './styles';


const Home = () => {

  const [portfolio, setPortfolio] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  

  useEffect(() => {
    setPortfolio(data);
  }, []);

  const handleProjectClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  }

  return (

    <Container>
      <Header/>

        <Content>
            <div className="intro">
              <Fade top>
                <h1>ME CONHEÇA</h1>
              </Fade>
              <Fade bottom>
                <h3>Bem vindo ao meu Portfólio!</h3>
              </Fade>

            </div>


            <div className="titleProjetos">
            <Fade top>
              <h1>PROJETOS</h1>
            </Fade>
            <Fade bottom>
              <strong>
                Projetos criados ao longo dos meus estudos e que me orgulho.
              </strong>
            </Fade>
              
            </div>

            <Fade left>
            <PortfolioArea>
              <PortfolioList>
              {portfolio.map((portfolio, index) => (
                  <PortfolioItem
                    key={index}
                    data={portfolio}
                    onClick={handleProjectClick}
                  />
                ))}
              </PortfolioList>
            </PortfolioArea>
            </Fade>
            

           


            <Modal 
              status={modalStatus}
              setStatus={setModalStatus}
            >
              <Fade top>
                <ModalProject data={modalData} setStatus={setModalStatus} />

              </Fade>
              
            </Modal>

          
          <Fade top>
            <h1>SKILLS</h1>
          </Fade>
          <Fade bottom>
            <strong>
              Aqui está minha tech favorita, linguagens e frameworks que estudo e
              uso nos meus projetos.
            </strong>
          </Fade>

          <Fade left>
            <Skills>
              
              <div className="skills">
                <Card>
                  <i className="devicon-html5-plain colored" />
                  <Fade bottom>
                    <h2>HTML5</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-css3-plain colored" />
                  <Fade bottom>
                    <h2>CSS3</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-javascript-plain colored" />
                  <Fade bottom>
                    <h2>Javascript</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-react-original colored" />
                  <Fade bottom>
                    <h2>React</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-typescript-plain colored" />
                  <Fade bottom>
                    <h2>Typescript</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-bootstrap-plain colored" />
                  <Fade bottom>
                    <h2>Bootstrap</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-nodejs-plain colored" />
                  <Fade bottom>
                  <h2>Node</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-express-original colored" />
                  <Fade bottom>
                    <h2>Express</h2>
                  </Fade>
                </Card>

                <Card>
                  <i className="devicon-docker-plain colored" />
                  <Fade bottom>
                    <h2>Docker</h2>
                  </Fade>
                </Card>

                <Card>
                  <i class="devicon-git-plain colored"/>
                  <Fade bottom>
                    <h2>Git</h2>
                  </Fade>
                </Card>
                
              </div>
            </Skills>
          </Fade>

          <Fade top>
              <h1>ESTUDOS</h1>
            </Fade>
            <Fade bottom>
              <strong>
                Formação acadêmica e cursos
              </strong>
            </Fade>
          
          <Fade left>
            <StudyArea>
              <TimeLine />
            </StudyArea>
          </Fade>
          

          <Fade top>
            <h1>CONTATO</h1>
          </Fade>
          <ContactContainer>
            <div className="container_card">
              <div className="contact_card">

                <Fade left>
                  <h2>Telefone</h2>
                </Fade>
                <br />
                  <a href="tel:+351934854234">934854234</a>
              </div>

              <div className="contact_card">
                <Fade top>
                  <h2>Email</h2>
                </Fade>

                <br /> 
                <strong>du_du.mba@hotmail.com</strong>
              </div>

              <div className="contact_card">
                <Fade right>
                  <h2>Redes Sociais</h2>
                </Fade>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/eduardo-moreira-944413151/"
                    target="blank"
                  >
                    <i className="devicon-linkedin-plain colored" />
                  </a>

                  <a href="https://github.com/EduardoMoreira26" target="blank">
                    <i className="devicon-github-plain colored" />
                  </a>
              </div>
            </div>
          </ContactContainer>

        

        </Content>

      <Footer/>

    </Container>

  );
}

export default Home;