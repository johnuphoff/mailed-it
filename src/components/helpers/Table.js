import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { containerWidth } from '../../theme';

const StyledTable = styled.table.attrs({ foo: 'bar' })`
  max-width: ${({ width }) => `${width}px`};
  width: 100%;
`;

StyledTable.defaultProps = {
  cellSpacing: 0,
  cellPadding: 0,
  border: 0,
  align: 'center',
  bgcolor: '#ffffff'
};

const TBody = ({ condition, children }) => (condition ? <tbody>{children}</tbody> : children);

TBody.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

const Table = ({ children, ...props }) => {
  const { NODE_ENV } = process.env;

  return (
    <StyledTable width={containerWidth} {...props} foo="bar">
      <TBody condition={NODE_ENV === 'development'}>{children}</TBody>
    </StyledTable>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
