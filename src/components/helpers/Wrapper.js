import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderToString } from 'react-dom/server';
import { containerWidth } from '../../theme';

const StyledWrapper = styled.div`
  background-color: #f2f2f2;
  max-width: ${({ theme }) => theme.containerWidth}px;
  margin: auto;
`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper
      dangerouslySetInnerHTML={{
        __html: `
        <!--[if mso]>
        <table role="presentation" width="${containerWidth}" cellspacing="0" cellpadding="0" border="0" align="center">
        <tr>
        <td>
        <![endif]-->
        ${renderToString(children)}
        <!--[if mso]>
        </td>
        </tr>
        </table>
        <![endif]-->`
      }}
    />
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
