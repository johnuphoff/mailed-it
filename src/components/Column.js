import React from 'react';
import PropTypes from 'prop-types';
import TableData from './TableData';

const Column = ({ children, ...props }) => (
  <TableData align="center" valign="top" {...props}>
    {children}
  </TableData>
);

Column.defaultProps = {
  children: null
};

Column.propTypes = {
  children: PropTypes.node
};

export default Column;
