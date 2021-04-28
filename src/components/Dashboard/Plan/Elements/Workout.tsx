import { ElementCell, WorkoutContainer, WorkoutIcon, Tick } from './style';
import React, { ReactElement, useCallback } from 'react';
import { usePlan } from '../../../../hooks/usePlan';
import { IGridPosition } from '../IGridPosition';

interface IWorkoutProps {
    position: IGridPosition;
    dayId: number;
    isDone: boolean;
    isActive: boolean;
}

export function Workout(props: IWorkoutProps): ReactElement {
    const { toggleWorkoutStatus } = usePlan();

    const handleClick = useCallback(() => {
        if (props.isActive) {
            toggleWorkoutStatus(props.dayId);
        }
    }, [props.isActive, toggleWorkoutStatus, props.dayId]);

    return (
        <ElementCell className="workout"
            position={props.position}
            isActive={props.isActive}
            onClick={handleClick}
        >
            <WorkoutContainer>
                <WorkoutIcon isActive={props.isDone}/>
                {props.isDone ? <Tick/> : null}
            </WorkoutContainer>
        </ElementCell>
    );
}
