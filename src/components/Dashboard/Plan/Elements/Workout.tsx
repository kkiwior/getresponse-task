import { Cell } from '../style';
import { WorkoutContainer, WorkoutIcon, Tick } from './style';
import React, { ReactElement, useCallback } from 'react';
import { usePlan } from 'hooks/usePlan';
import { IGridPosition } from 'interfaces/IGridPosition';

interface IWorkoutProps {
    position: IGridPosition;
    dayId: number;
    isDone: boolean;
    isActive: boolean;
}

function Workout(props: IWorkoutProps): ReactElement {
    const { toggleWorkoutStatus } = usePlan();

    const handleClick = useCallback(() => {
        if (props.isActive) {
            toggleWorkoutStatus(props.dayId);
        }
    }, [props.isActive, toggleWorkoutStatus, props.dayId]);

    return (
        <Cell className="workout"
            position={props.position}
            active={props.isActive}
            onClick={handleClick}
        >
            <WorkoutContainer>
                <WorkoutIcon current={props.isDone}/>
                {props.isDone ? <Tick/> : null}
            </WorkoutContainer>
        </Cell>
    );
}

export { Workout };
