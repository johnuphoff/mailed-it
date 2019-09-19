import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import theme, { containerWidth } from './theme';
import { Comment } from './components/helpers';

const GlobalStyles = createGlobalStyle`
  
  /* Outlines the grid, remove when sending */
  table td { box-shadow: 0 0 0 1px cyan; }

  /* CLIENT-SPECIFIC STYLES */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; }

  /* RESET STYLES */
  img { border: 0; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }

  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* ANDROID CENTER FIX */
  div[style*="margin: 16px 0;"] { margin: 0 !important; }
`;

const Wrapper = styled.div`
  background-color:#F2F2F2; 
  max-width: 640px; 
  margin: auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Comment text={`[if mso]>
          <table role="presentation" width="${containerWidth}" cellspacing="0" cellpadding="0" border="0" align="center">
          <tr>
          <td>
          <![endif]`} />
        <GlobalStyles suppressMultiMountWarning />
        <Container>
          <Row>
            <Column width={12}>Grid 1</Column>
          </Row>
        </Container>
        <Container>
          <Row>
            <Column width={6/12}>Grid 2</Column>
            <Column width={6/12}>Grid 2</Column>
          </Row>
        </Container>
        <Container>
          <Row>
            <Column width={4/12}>Grid 3</Column>
            <Column width={4/12}>Grid 3</Column>
            <Column width={4/12}>Grid 3</Column>
          </Row>
        </Container>
        <Container>
          <Row>
            <Column width={3/12}>Grid 4</Column>
            <Column width={3/12}>Grid 4</Column>
            <Column width={3/12}>Grid 4</Column>
            <Column width={3/12}>Grid 4</Column>
          </Row>
        </Container>
        <Comment text="[if mso]>
          </td>
          </tr>
          </table>
          <![endif]" />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
