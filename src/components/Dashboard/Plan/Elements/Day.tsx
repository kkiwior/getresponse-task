import React, { ReactElement } from 'react';
import { Meal } from './Meal';
import { Workout } from './Workout';
import { Print } from './Print';
import { IDay } from 'interfaces/IPlan';
import { Cell } from '../style';

interface IDayProps {
    day: IDay;
    column: number;
    active: boolean;
    isMobile?: boolean;
}

export function Day(props: IDayProps): ReactElement {
    const weekDuration = 7;
    const columnOffset = 3;

    return (
        <React.Fragment>
            {props.isMobile ?
                <Cell
                    className="day"
                    column={1}
                    endColumn={3}
                    row={(props.column) * weekDuration + 1}
                    active={props.active}
                >
                    Day {props.day.id}
                </Cell> :
                <Cell
                    className="day"
                    column={props.column}
                    row={1}
                    endRow={1}
                    active={props.active}
                >
                    Day {props.day.id}
                </Cell>}

            {props.day.meals.map((n, index) => (
                <Meal
                    key={index}
                    dayId={props.day.id}
                    column={props.isMobile ? 2 : props.column}
                    row={props.isMobile ? props.column * weekDuration + index + 2 : index + 2}
                    meal={n}
                    active={props.active}
                />
            ))}
            {props.day.type === 'GUILT-FREE' ?
                <Cell
                    className="guilt-free"
                    column={props.isMobile ? 1 : props.column}
                    endColumn={props.isMobile ? columnOffset : undefined}
                    row={props.isMobile ? props.column * weekDuration + 2 : 2}
                    endRow={props.isMobile ? props.column * weekDuration + weekDuration: weekDuration}
                >
                    GUILT-FREE DAY
                </Cell> :
                <Cell
                    className="type"
                    column={props.isMobile ? 1 : props.column}
                    row={props.isMobile ? props.column * weekDuration : weekDuration}
                >
                    {props.day.type}
                </Cell>}

            {props.day.type === 'GUILT-FREE' ?
                <Print
                    column={props.isMobile ? 1 : props.column}
                    endColumn={props.isMobile ? columnOffset : undefined}
                    row={props.isMobile ? props.column * weekDuration + weekDuration : weekDuration}
                    endRow={props.isMobile ? undefined : weekDuration + 2}
                /> :
                <Workout
                    column={props.isMobile ? 2 : props.column}
                    row={props.isMobile ? props.column * weekDuration + weekDuration : weekDuration + 1}
                    dayId={props.day.id}
                    isDone={props.day.isWorkoutDone}
                    active={props.active}
                />}
        </React.Fragment>
    );
}
