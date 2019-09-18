import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import theme from './theme';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles suppressMultiMountWarning />
      <Container>
        <Row>
          <Column>Hey!</Column>
          <Column>Hey!</Column>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
