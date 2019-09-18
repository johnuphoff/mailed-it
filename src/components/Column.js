import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import TableData from './TableData';

const Column = ({ children, width, ...props }) => (
  <TableData align="center" valign="top" width={width} {...props}>
    {children}
  </TableData>
);

Column.defaultProps = {
  children: null,
  width: themeGet('layout.containerWidth') / 2
};

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
};

export default Column;
