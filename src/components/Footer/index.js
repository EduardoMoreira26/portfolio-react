import React from 'react';
import { FiLinkedin, FiGithub } from "react-icons/fi";

import { Container } from './styles';

const Footer = () => {

  return (
    <Container>
    <footer>
      <strong>© Eduardo Moreira 2020 | Desenvolvido por mim</strong>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/eduardo-moreira-944413151/"
            target="blank"
          >
            <FiLinkedin />
          </a>

          <a href="https://github.com/EduardoMoreira26" target="blank">
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  </Container>
  );
}

export default Footer;