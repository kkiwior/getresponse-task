import { Cell } from '../style';
import { WorkoutContainer, WorkoutIcon, Tick } from './style';
import React, { ReactElement, useCallback } from 'react';
import { usePlan } from 'hooks/usePlan';

interface IWorkoutProps {
    column: number;
    row: number;
    endRow?: number;
    endColumn?: number;
    dayId: number;
    isDone: boolean;
    active: boolean;
}

function Workout(props: IWorkoutProps): ReactElement {
    const { toggleWorkoutStatus } = usePlan();

    const handleClick = useCallback(() => {
        if (props.active) {
            toggleWorkoutStatus(props.dayId);
        }
    }, [props.active, toggleWorkoutStatus, props.dayId]);

    return (
        <Cell className="workout"
            column={props.column}
            endColumn={props.endColumn ? props.endColumn : props.column}
            row={props.row}
            endRow={props.endRow ? props.endRow : props.row}
        >
            <WorkoutContainer onClick={handleClick}>
                <WorkoutIcon enabled={props.isDone}/>
                {props.isDone ? <Tick/> : null}
            </WorkoutContainer>
        </Cell>
    );
}

export { Workout };
