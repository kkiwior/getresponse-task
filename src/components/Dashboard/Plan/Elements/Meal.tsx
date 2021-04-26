import React, { ReactElement, useCallback } from 'react';
import { usePlan } from 'hooks/usePlan';
import mealTick from 'resources/images/meal-tick.png';
import { IMeal } from 'interfaces/IPlan';
import { Cell } from '../style';
import { MealName, MealTick, MealImage } from './style';
import { IGridPosition } from 'interfaces/IGridPosition';

interface IMealProps {
    meal: IMeal;
    dayId: number;
    active: boolean;
    position: IGridPosition;
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
            position={{
                column: props.position.column,
                row: props.position.row,
            }}
            image={props.meal.image ? props.meal.image : undefined}
            active={props.active}
            onClick={handleMealClick}
        >
            <MealName>{props.meal.name}</MealName>
            {props.meal.isCompleted ? <MealTick src={mealTick}/> : null}
            {props.meal.image ? <MealImage src={`/images/meals/${props.meal.image}`} enabled={props.active}/> : null}
        </Cell>
    );
}
