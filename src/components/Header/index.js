import React, { useState } from 'react';

import Modal from '../Modal'
import { Container } from './styles';

const Header = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  return (
    <Container>
      <header>
        <a href="/">Eduardo Moreira</a>

        <button onClick={handleButtonClick}>Abrir Modal</button>
        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <h1>Testando 123</h1>
        </Modal>
      </header>
    </Container>
  );
}

export default Header;