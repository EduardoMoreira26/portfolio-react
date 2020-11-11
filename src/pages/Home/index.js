import React, { useState } from 'react';


import { FiXCircle, FiLinkedin, FiGithub } from "react-icons/fi";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { Container, Content, ModalArea, Skills, Card } from './styles';

import olxcard from "../../assets/olxcard.png";
import olxbg2 from "../../assets/olxbg2.png";

const Home = () => {
const [modalVisible, setModalVisible] = useState(false)


  return (
    <>
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

            <section className="projects_container">
              <div className="background-card">
                <button onClick={() => setModalVisible(true)} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>jujujuj</h2>
                    <p>jujujuj</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal visible={modalVisible} setVisible={setModalVisible}>
                    <ModalArea>
                      <div className="close-button">
                        <FiXCircle onClick={() => setModalVisible(false)} size={44} />
                      </div>
                      <h1>OLX CLONE</h1>

                      <div className="imgs">
                        <img src={olxbg2} alt="Olx" />
                      </div>

                      <div className="description">
                        <p>
                          DFD
                        </p>
                        <br />
                        <a
                          href="https://github.com/EduardoMoreira26/FrontEnd-OLX"
                          target="blank"
                        >
                        Repositório GitHub
                        </a>
                      </div>
                    </ModalArea>
                  </Modal>
              )}
              </div>

              <div className="background-card">
                <button onClick={() => setModalVisible(true)} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>Ecoleta</h2>
                    <p>Node ReactJs e RN</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal 
                    visible={modalVisible} 
                    setVisible={setModalVisible}
                    >
                    <ModalArea>
                      <div className="close-button">
                        <FiXCircle onClick={() => setModalVisible(false)} size={44} />
                      </div>
                      <h1>Ecoleta</h1>

                      <div className="imgs">
                        <img src={olxbg2} alt="Olx" />
                      </div>

                      <div className="description">
                        <p>
                         ihuvtfctfctfctfct
                        </p>
                        <br />
                        <a
                          href="https://github.com/EduardoMoreira26/FrontEnd-OLX"
                          target="blank"
                        >
                        Repositório GitHub
                        </a>
                      </div>
                    </ModalArea>
                  </Modal>
              )}
              </div>
        </section>

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

          </Content>

        <Footer/>

      </Container>

      
    </>
    
  );
}

export default Home;