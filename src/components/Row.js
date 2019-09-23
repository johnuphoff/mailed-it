import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from './helpers';
import Table from './helpers/Table';
import { containerWidth, containerPadding } from '../theme';

const Row = ({ children }) => (
  <Table width={containerWidth - containerPadding}>
    <TableRow>{children}</TableRow>
  </Table>
);

Row.defaultProps = {
  children: null
};

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
