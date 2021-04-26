import { Cell } from '../style';
import { WorkoutContainer, WorkoutIcon, Tick } from './style';
import React, { ReactElement, useCallback } from 'react';
import { usePlan } from 'hooks/usePlan';
import { IGridPosition } from 'interfaces/IGridPosition';

interface IWorkoutProps {
    position: IGridPosition;
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
            position={props.position}
        >
            <WorkoutContainer onClick={handleClick}>
                <WorkoutIcon enabled={props.isDone}/>
                {props.isDone ? <Tick/> : null}
            </WorkoutContainer>
        </Cell>
    );
}

export { Workout };
