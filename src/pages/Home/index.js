import React, { useState } from 'react';
import { FiXCircle, FiLinkedin, FiGithub } from "react-icons/fi";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { Container, Content, ModalArea } from './styles';

import olxcard from "../../assets/olxcard.png";
import olxbg2 from "../../assets/olxbg2.png";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  const handleButtonClose = () => {
    setModalVisible(false);
  }

  

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
                <button onClick={handleButtonClick} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>OLX Clone</h2>
                    <p>ReactJs</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal visible={modalVisible} setVisible={setModalVisible}>
                    <ModalArea>
                      <div className="close-button">
                        <FiXCircle onClick={handleButtonClose} size={44} />
                      </div>
                      <h1>OLX CLONE</h1>

                      <div className="imgs">
                        <img src={olxbg2} alt="Olx" />
                      </div>

                      <div className="description">
                        <p>
                          Projeto criado com principal objetivo de colocar em
                          prática todo o conhecimento adquirido no curso da
                          plataforma B7WEB, onde foi abordado todos os conceitos da
                          biblioteca React. Onde foi criado o clone da aplicação
                          OLX, através de uma SPA.
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
                <button onClick={handleButtonClick} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>Ecoleta</h2>
                    <p>Node ReactJs e RN</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal visible={modalVisible} setVisible={setModalVisible}>
                    <ModalArea>
                      <div className="close-button">
                        <FiXCircle onClick={handleButtonClose} size={44} />
                      </div>
                      <h1>Ecoleta</h1>

                      <div className="imgs">
                        <img src={olxbg2} alt="Olx" />
                      </div>

                      <div className="description">
                        <p>
                          Criado durante a NLW
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

            {/* <section className="projects_container">
              <div className="background-card">
                <button onClick={handleButtonClick} className="card">
                  <img src={olxcard} alt="" />
                  <h2>OLX Clone</h2>
                  <p>ReactJs</p>
                </button>
              </div>
              <Modal  visible={modalVisible} setVisible={setModalVisible}>
                <ModalArea>
                    <div className="close-button">
                      <FiXCircle onClick={handleButtonClose} size={44} />
                    </div>
                    <h1>OLX CLONE</h1>

                    <div className="imgs">
                      <img src={olxbg2} alt="Olx" />
                    </div>

                    <div className="description">
                      <p>
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
                        Eduardo Moreira
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

              <div className="background-card">
                <button onClick={handleButtonClick} className="card">
                  <img src={olxcard} alt="" />
                  <h2>Node </h2>
                  <p>Node</p>
                </button>
              </div>
              <Modal visible={modalVisible} setVisible={setModalVisible}>
              <div className="close-button">
                      <FiXCircle size={44} />
                    </div>
                    <h1>OLX CLONE</h1>

                    <div className="imgs">
                      <img src={olxbg2} alt="Olx" />
                    </div>

                    <div className="description">
                      <p>
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                        ONONODNODNSODNSONDSONDSODNSODN
                      
                      </p>
                      <br />
                      <a
                        href="https://github.com/EduardoMoreira26/FrontEnd-OLX"
                        target="blank"
                      >
                        Repositório GitHub
                      </a>
                    </div>
              </Modal>
            </section> */}
            

          </Content>

        <Footer/>

      </Container>

      
    </>
    
  );
}

export default Home;