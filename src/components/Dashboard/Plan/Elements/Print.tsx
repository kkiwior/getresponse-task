import React from 'react';
import { Cell } from '../style';
import { PrintText } from './style';
import { ReactComponent as PrintIcon } from '../../../../resources/icons/print.svg';

interface IPrintProps {
    column: number;
}

export function Print(props: IPrintProps): React.ReactElement {
    const handlePrintClick = React.useCallback(() => {
        window.print();
    }, []);

    return (
        <Cell className="print" column={props.column} row={7} endRow={9} onClick={handlePrintClick}>
            <PrintIcon/>
            <PrintText>Print</PrintText>
        </Cell>
    );
}
