import React, { ReactElement, useCallback, useState } from 'react';
import { ReactComponent as Arrow } from '../../../resources/icons/arrow.svg';
import { SelectorContainer, ArrowButton, Week } from './style';

interface IWeekProps {
    currentWeek: number;
    maxWeek: number;
}

export function WeekSlider(props: IWeekProps): ReactElement {
    const [week, setWeek] = useState(props.currentWeek);

    const changeWeek = useCallback((c: number): void => {
        setWeek(week + c);
    }, [week]);

    const handlePreviousWeekClick = useCallback(() => {
        changeWeek(-1);
    }, [changeWeek]);

    const handleNextWeekClick = useCallback(() => {
        changeWeek(1);
    }, [changeWeek]);

    return (
        <SelectorContainer>
            {week > 1 ? (
                <ArrowButton
                    className="reverse"
                    name="previousWeek"
                    aria-label="Previous week"
                    onClick={handlePreviousWeekClick}
                    column={1}
                ><Arrow/>
                </ArrowButton>) : null}
            <Week column={2}>Week {week}</Week>
            {week < props.maxWeek ?
                <ArrowButton
                    name="nextWeek"
                    aria-label="Next week"
                    onClick={handleNextWeekClick}
                    column={3}
                >
                    <Arrow/>
                </ArrowButton> : null}
        </SelectorContainer>
    );
}

