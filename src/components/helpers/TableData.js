import styled from 'styled-components';

const TableData = styled('td')`
  padding: 10px;
`;

TableData.defaultProps = {
  align: 'center',
  valign: 'top'
};

export default TableData;
