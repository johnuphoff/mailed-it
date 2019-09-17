import styled from 'styled-components';

const StyledTable = styled('table')`
  max-width: ${({ width }) => `${width}px`};
  width: 100%;
`;

StyledTable.defaultProps = {
  width: 640,
  cellSpacing: 0,
  cellPadding: 0,
  border: 0,
  align: 'center',
  bgColor: '#ffffff',
  children: undefined
};

export default StyledTable;
