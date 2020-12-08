import React, { useState, useEffect } from 'react';

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
              <h1>ME CONHEÇA</h1>
              <h3>Bem vindo ao meu Portfólio!</h3>
            </div>


            <div className="titleProjetos">
            <h1>PROJETOS</h1>
              <strong>
                Projetos criados ao longo dos meus estudos e que me orgulho.
              </strong>
            </div>

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

            <Modal 
              status={modalStatus}
              setStatus={setModalStatus}
            >
              <ModalProject data={modalData} setStatus={setModalStatus} />
              
            </Modal>



            


          <Skills>
            <h1>SKILLS</h1>
            <strong>
              Aqui está minha tech favorita, linguagens e frameworks que estudo e
              uso nos meus projetos.
            </strong>

            <div className="skills">
              <Card>
                <i className="devicon-html5-plain colored" />
                <h2>HTML5</h2>
              </Card>

              <Card>
                <i className="devicon-css3-plain colored" />
                <h2>CSS3</h2>
              </Card>

              <Card>
                <i className="devicon-javascript-plain colored" />
                <h2>Javascript</h2>
              </Card>

              <Card>
                <i className="devicon-react-original colored" />
                <h2>React</h2>
              </Card>

              <Card>
                <i className="devicon-typescript-plain colored" />
                <h2>Typescript</h2>
              </Card>

              <Card>
                <i className="devicon-bootstrap-plain colored" />
                <h2>Bootstrap</h2>
              </Card>

              <Card>
                <i className="devicon-nodejs-plain colored" />
                <h2>Node</h2>
              </Card>

              <Card>
                <i className="devicon-express-original colored" />
                <h2>Express</h2>
              </Card>

              <Card>
                <i className="devicon-docker-plain colored" />
                <h2>Docker</h2>
              </Card>
            </div>
          </Skills>

          
          <h1>ESTUDOS</h1>
            <strong>
                Formação acadêmica e cursos
            </strong>
         
          <StudyArea>
            <TimeLine />
          </StudyArea>


          <h1>CONTATO</h1>
          <ContactContainer>
            <div className="container_card">
              <div className="contact_card">
                <h2>Telefone</h2> <br />
                  <a href="tel:+351934854234">934854234</a>
              </div>

              <div className="contact_card">
                <h2>Email</h2> <br /> <strong>du_du.mba@hotmail.com</strong>
              </div>

              <div className="contact_card">
                <h2>Redes Sociais</h2>
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