import React, { ReactElement, useCallback } from 'react';
import { usePlan } from '../../../../hooks/usePlan';
import mealTick from '../../../../resources/images/meal-tick.png';
import { IMeal } from '../../../../interfaces/IPlan';
import { Cell } from '../style';
import { MealName, MealTick } from './style';

interface IMealProps {
    meal: IMeal;
    dayId: number;
    column: number;
    row: number;
    active: boolean;
}

export function Meal(props: IMealProps): ReactElement {
    const { toggleMealStatus } = usePlan();

    const handleMealClick = useCallback(() => {
        //prevent to toggle meal status for not actual day
        if (props.active) {
            toggleMealStatus(props.dayId, props.meal.id);
        }
    }, [toggleMealStatus, props.dayId, props.meal.id, props.active]);

    return (
        <Cell className="meal"
            column={props.column}
            row={props.row}
            active={props.active}
            onClick={handleMealClick}
        >
            <MealName>{props.meal.name}</MealName>
            {props.meal.isCompleted ? <MealTick src={mealTick}/> : null}
        </Cell>
    );
}
