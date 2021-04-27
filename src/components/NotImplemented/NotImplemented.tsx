import React, { ReactElement } from 'react';
import styled from 'styled-components';

const NotImplementedMessage = styled.div`
  font-size: 24px;
  margin: 20px 0;
`;

export function NotImplemented(): ReactElement {
    return (
        <NotImplementedMessage>Route not implemented.</NotImplementedMessage>
    );
}
