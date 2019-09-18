import React from 'react';
import PropTypes from 'prop-types';
import TableData from './helpers/TableData';
import TableRow from './helpers/TableRow';
import Table from './helpers/Table';

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
