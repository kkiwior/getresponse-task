import React, { ReactElement } from 'react';
import { ElementCell, PrintText } from './style';
import { ReactComponent as PrintIcon } from '../../../../resources/icons/print.svg';
import { IGridPosition } from '../IGridPosition';

export function Print(props: IGridPosition): ReactElement {
    return (
        <ElementCell
            className="print"
            position={props}
            onClick={window.print}
            isActive={true}
        >
            <PrintIcon/>
            <PrintText>Print</PrintText>
        </ElementCell>
    );
}
