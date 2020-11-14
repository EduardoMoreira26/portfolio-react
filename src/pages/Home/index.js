import React, { useState } from 'react';


import { FiXCircle, FiLinkedin, FiGithub } from "react-icons/fi";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { Container, Content, Skills, Card, CardCursos } from './styles';

import olxcard from "../../assets/olxcard.png";
import olxbg2 from "../../assets/olxbg2.png";

import rocketseat from "../../assets/rocketseat.png";
import origamid from "../../assets/origamid.png";
import b7web from "../../assets/b7web.png";
import bitcompany from "../../assets/bitcompany.png";
import pitagoras from "../../assets/pitagoras.png";

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
                    <h2>Ecoleta</h2>
                    <p>Node ReactJs e RN</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal 
                    visible={modalVisible} 
                    setVisible={setModalVisible}
                    title="Ecoleta"
                    img={olxbg2}
                    description="esse meu projeto"
                  />
                )}
              </div>

              <div className="background-card">
                <button onClick={() => setModalVisible(true)} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>Olx</h2>
                    <p>Node</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal 
                    visible={modalVisible} 
                    setVisible={setModalVisible}
                    title="Olx top"
                    img={olxbg2}
                    description="olx top top"
                  />
              )}
              </div>

              <div className="background-card">
                <button onClick={() => setModalVisible(true)} className="card">
                  <div className="effect-closed">
                    <img src={olxcard} alt="" />
                    <h2>Javascript</h2>
                    <p>Javascript</p>
                  </div>
                </button>

                {modalVisible && (
                  <Modal 
                    visible={modalVisible} 
                    setVisible={setModalVisible}
                    title="eu vou conseguir"
                    img={olxbg2}
                    description="dasdasdasdasd"
                    url="https://github.com/EduardoMoreira26/FrontEnd-OLX"
                    nameurl="Repositório GitHub"
                  />
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

        <h1>CURSOS</h1>
        <section className="projects_container section_cursos">
          <CardCursos>
            <img src={rocketseat} alt="rocketseat" />
            <div className="infoCursos">
              <h2>
                2020 <br />
                Rocketseat - Gostack 11
              </h2>
              <p>
                Bootcamp imersivo nas tecnologias Node, React e ReactNative.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img className="b7web" src={b7web} alt="B7WEB" />
            <div className="infoCursos">
              <h2>
                2020 <br />
                B7WEB
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={origamid} alt="Origamid" />
            <div className="infoCursos">
              <h2>
                {" "}
                2020
                <br />
                Origamid
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={pitagoras} alt="Origamid" />
            <div className="infoCursos">
              <h2>
                2015 - 2019
                <br />
                Faculdade Pitágoras - Bacharel em Contabilidade
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={bitcompany} alt="Bitcompany" />
            <div className="infoCursos">
              <h2>
                2011 - 2012 <br />
                BitCompany - Técnico em Informática
              </h2>
              <p>
                Manutenção de Computadores. <br /> Redes de Computadores. <br />{" "}
                Sistemas Operacionais. <br /> Arquitetura de Computadores.{" "}
                <br /> Lógica de Programação. <br /> Desenvolvimento de
                Sistemas(HTML CSS PHP). <br /> Banco de Dados(MySQL).
              </p>
            </div>
          </CardCursos>
        </section>

        <h1>CONTATO</h1>
        <section className="contact_container">
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
        </section>

        

          </Content>

        <Footer/>

      </Container>

      
    </>
    
  );
}

export default Home;