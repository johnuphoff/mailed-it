/**
 * Fluid Email Template
 */

import React from 'react';
import { Container, Row, Column, Fluid } from '../components';

const Welcome = () => (
  <Fluid>
    <Container>
      <Row>
        <Column width={12}>Grid 1</Column>
      </Row>
    </Container>
    <Container>
      <Row>
        <Column width={6 / 12}>Grid 2</Column>
        <Column width={6 / 12}>Grid 2</Column>
      </Row>
    </Container>
    <Container>
      <Row>
        <Column width={4 / 12}>Grid 3</Column>
        <Column width={4 / 12}>Grid 3</Column>
        <Column width={4 / 12}>Grid 3</Column>
      </Row>
    </Container>
    <Container>
      <Row>
        <Column width={3 / 12}>Grid 4</Column>
        <Column width={3 / 12}>Grid 4</Column>
        <Column width={3 / 12}>Grid 4</Column>
        <Column width={3 / 12}>Grid 4</Column>
      </Row>
    </Container>
  </Fluid>
);

export default Welcome;
