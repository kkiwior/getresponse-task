import React from 'react';
import { Cell } from '../style';
import { PrintText } from './style';
import { ReactComponent as PrintIcon } from 'resources/icons/print.svg';
import { IGridPosition } from '../../../../interfaces/IGridPosition';

export function Print(props: IGridPosition): React.ReactElement {
    const handlePrintClick = React.useCallback(() => {
        window.print();
    }, []);

    return (
        <Cell
            className="print"
            position={props}
            onClick={handlePrintClick}
        >
            <PrintIcon/>
            <PrintText>Print</PrintText>
        </Cell>
    );
}
