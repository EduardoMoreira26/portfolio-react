import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

const Home = () => {

  return (
    <>
      <Container>
        <Header/>
          <Content>
            <div className="intro">
              <h1>ME CONHEÇA</h1>
              <h3>Bem vindo ao meu Portfólio!</h3>
            </div>
          </Content>
        <Footer/>
      </Container>
    </>
    
  );
}

export default Home;