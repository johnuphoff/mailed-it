import React from 'react';
import PropTypes from 'prop-types';
import { TableData } from './helpers';
import { getPx } from '../utils';
import { containerWidth, containerPadding } from '../theme';

const Column = ({ children, width, ...props }) => (
  <TableData align="center" valign="top" width={getPx(width)} {...props}>
    {children}
  </TableData>
);

Column.defaultProps = {
  children: null,
  width: containerWidth - containerPadding
};

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
};

export default Column;
