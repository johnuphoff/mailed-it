import React from 'react';
import PropTypes from 'prop-types';
import TableData from './TableData';
import TableRow from './TableRow';
import Table from './Table';

const Container = ({ children }) => (
  <Table>
    <TableRow>
      <TableData align="center" valign="top">
        {children}
      </TableData>
    </TableRow>
  </Table>
);

Container.defaultProps = {
  children: null
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
