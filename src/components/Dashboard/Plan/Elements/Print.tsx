import React from 'react';
import { Cell } from '../style';
import { PrintText } from './style';
import { ReactComponent as PrintIcon } from 'resources/icons/print.svg';

interface IPrintProps {
    column: number;
    row: number;
    endRow?: number;
    endColumn?: number;
}

export function Print(props: IPrintProps): React.ReactElement {
    const handlePrintClick = React.useCallback(() => {
        window.print();
    }, []);

    return (
        <Cell
            className="print"
            column={props.column}
            endColumn={props.endColumn ? props.endColumn : props.column}
            row={props.row}
            endRow={props.endRow ? props.endRow : props.row}
            onClick={handlePrintClick}
        >
            <PrintIcon/>
            <PrintText>Print</PrintText>
        </Cell>
    );
}
