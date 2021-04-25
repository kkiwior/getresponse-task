import React, { ReactElement } from 'react';
import { Meal } from './Meal';
import { Workout } from './Workout';
import { Print } from './Print';
import { IDay } from '../../../../interfaces/IPlan';
import { Cell } from '../style';

interface IDayProps {
    day: IDay;
    column: number;
    active: boolean;
}

export function Day(props: IDayProps): ReactElement {
    return (
        <React.Fragment>
            <Cell className="day" column={props.column} row={1} active={props.active}>Day{props.day.id}</Cell>
            {props.day.meals.map((n, index) => (
                <Meal
                    key={index}
                    dayId={props.day.id}
                    column={props.column}
                    row={index + 2}
                    meal={n}
                    active={props.active}
                />
            ))}
            {props.day.type === 'GUILT-FREE' ?
                <Cell className="guilt-free" column={props.column} row={2} endRow={7}>GUILT-FREE DAY</Cell> :
                <Cell className="type" column={props.column} row={7}>{props.day.type}</Cell>}
            {props.day.type === 'GUILT-FREE' ? <Print column={props.column}/> : (
                <Workout
                    column={props.column}
                    dayId={props.day.id}
                    isDone={props.day.isWorkoutDone}
                    active={props.active}
                />
            )}
        </React.Fragment>
    );
}
