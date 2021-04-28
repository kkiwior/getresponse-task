import React, { ReactElement, useCallback } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

interface IProteinProps {
    name: string;
    selected: [string, string];
    notSelected: [string, string];
}

export function Protein(props: IProteinProps): ReactElement {
    const [toggle, setToggle] = useLocalStorage(props.name, false);

    const toggleProtein = useCallback(() => setToggle(prevToggle => !prevToggle), [setToggle]);

    return (
        <div onClick={toggleProtein} tabIndex={0} role="button">
            <picture>
                <source srcSet={toggle ? props.selected[1] : props.notSelected[1]} type="image/webp"/>
                <img
                    src={toggle ? props.selected[0] : props.notSelected[0]}
                    title={props.name}
                    alt={props.name}
                />
            </picture>
        </div>
    );
}

