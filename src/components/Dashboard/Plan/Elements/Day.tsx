import React, { ReactElement } from 'react';
import { Meal } from './Meal';
import { Workout } from './Workout';
import { Print } from './Print';
import { IDay, MealType } from '../../../../interfaces/IPlan';
import { ElementCell, GuiltFreeText } from './style';

interface IDayProps {
    day: IDay;
    column: number;
    isCurrent: boolean;
    isActive: boolean;
    isMobile?: boolean;
}

const weekDuration = 7;
const columnOffset = 3;

export function Day(props: IDayProps): ReactElement {
    return (
        <React.Fragment>
            {
                props.isMobile ?
                    <ElementCell
                        className="day"
                        position={{
                            column: 1,
                            row: props.column * weekDuration + 1,
                            endColumn: 3,
                        }}
                        isActive={props.isActive}
                        isCurrent={props.isCurrent}
                    >
                        Day {props.day.id}
                    </ElementCell> :
                    <ElementCell
                        className="day"
                        position={{
                            column: props.column,
                            row: 1,
                        }}
                        isActive={props.isActive}
                        isCurrent={props.isCurrent}
                    >
                        Day {props.day.id}
                    </ElementCell>
            }

            {props.day.meals.map((n, index) => (
                <Meal
                    key={index}
                    dayId={props.day.id}
                    position={{
                        column: props.isMobile ? 2 : props.column,
                        row: props.isMobile ? props.column * weekDuration + index + 2 : index + 2,
                    }}
                    meal={n}
                    isActive={props.isActive}
                    isCurrent={props.isCurrent}
                />
            ))}

            {
                props.day.type === MealType.GuiltFree ?
                    <React.Fragment>
                        <ElementCell
                            className="guilt-free"
                            position={{
                                column: props.isMobile ? 1 : props.column,
                                row: props.isMobile ? props.column * weekDuration + 2 : 2,
                                endColumn: props.isMobile ? columnOffset : undefined,
                                endRow: props.isMobile ? props.column * weekDuration + weekDuration: weekDuration,
                            }}
                        >
                            <GuiltFreeText>GUILT-FREE DAY</GuiltFreeText>
                        </ElementCell>
                        <Print
                            column={props.isMobile ? 1 : props.column}
                            endColumn={props.isMobile ? columnOffset : undefined}
                            row={props.isMobile ? props.column * weekDuration + weekDuration : weekDuration}
                            endRow={props.isMobile ? undefined : weekDuration + 2}
                        />
                    </React.Fragment> :
                    <React.Fragment>
                        <ElementCell
                            className="type"
                            position={{
                                column: props.isMobile ? 1 : props.column,
                                row: props.isMobile ? props.column * weekDuration : weekDuration,
                            }}
                        >
                            {props.day.type}
                        </ElementCell>
                        <Workout
                            position={{
                                column: props.isMobile ? 2 : props.column,
                                row: props.isMobile ? props.column * weekDuration + weekDuration : weekDuration + 1,
                            }}
                            dayId={props.day.id}
                            isDone={props.day.isWorkoutDone}
                            isActive={props.isActive}
                        />
                    </React.Fragment>
            }
        </React.Fragment>
    );
}
