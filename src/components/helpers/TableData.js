import styled from 'styled-components';
import { containerPadding } from '../../theme';

const TableData = styled('td')`
  padding: ${containerPadding / 2}px;
`;

TableData.defaultProps = {
  align: 'center',
  valign: 'top'
};

export default TableData;
