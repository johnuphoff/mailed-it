import React from 'react';
import PropTypes from 'prop-types';
import { TableData } from './helpers';
import { getPx } from '../utils';

const Column = ({ children, width, ...props }) => (
  <TableData align="center" valign="top" width={getPx(width)} {...props}>
    {children}
  </TableData>
);

Column.defaultProps = {
  children: null,
  width: 600
};

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
};

export default Column;
