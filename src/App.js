import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';

const theme = {
  containerWidth: '640'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Row>
          <Column>Hey!</Column>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
