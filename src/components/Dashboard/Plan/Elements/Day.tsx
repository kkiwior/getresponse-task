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
                    position={{
                        column: 1,
                        row: props.column * weekDuration + 1,
                        endColumn: 3,
                    }}
                    active={props.active}
                >
                    Day {props.day.id}
                </Cell> :
                <Cell
                    className="day"
                    position={{
                        column: props.column,
                        row: 1,
                    }}
                    active={props.active}
                >
                    Day {props.day.id}
                </Cell>}

            {props.day.meals.map((n, index) => (
                <Meal
                    key={index}
                    dayId={props.day.id}
                    position={{
                        column: props.isMobile ? 2 : props.column,
                        row: props.isMobile ? props.column * weekDuration + index + 2 : index + 2,
                    }}
                    meal={n}
                    active={props.active}
                />
            ))}
            {props.day.type === 'GUILT-FREE' ?
                <Cell
                    className="guilt-free"
                    position={{
                        column: props.isMobile ? 1 : props.column,
                        row: props.isMobile ? props.column * weekDuration + 2 : 2,
                        endColumn: props.isMobile ? columnOffset : undefined,
                        endRow: props.isMobile ? props.column * weekDuration + weekDuration: weekDuration,
                    }}
                >
                    GUILT-FREE DAY
                </Cell> :
                <Cell
                    className="type"
                    position={{
                        column: props.isMobile ? 1 : props.column,
                        row: props.isMobile ? props.column * weekDuration : weekDuration,
                    }}
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
                    position={{
                        column: props.isMobile ? 2 : props.column,
                        row: props.isMobile ? props.column * weekDuration + weekDuration : weekDuration + 1,
                    }}
                    dayId={props.day.id}
                    isDone={props.day.isWorkoutDone}
                    active={props.active}
                />}
        </React.Fragment>
    );
}
