import React, { ReactElement, useEffect } from 'react';
import planApi from '../../../resources/planApi.json';
import { Day } from './Elements/Day';
import { usePlan } from '../../../hooks/usePlan';
import { PlanContainer, Cell, Arrow, Selection } from './style';
import { IPlan } from '../../../interfaces/IPlan';

function Plan(): ReactElement {
    const { plan, changePlan } = usePlan();
    const weekDuration = 7;

    useEffect(() => {
        fetchPlan().then((planData: IPlan) => changePlan(planData));
    }, [changePlan]);

    return (
        <PlanContainer id="plan" column={plan.currentDay % weekDuration + 1}>
            {plan.timeTable.map((n, index) => <Cell key={index} column={1} row={index + 2} className="time">{n}</Cell>)}

            <Cell className="workout" column={1} row={8}>Workout <Arrow/></Cell>

            {plan.days.map((n, index) => (
                <Day
                    key={index}
                    column={index + 2}
                    day={n}
                    active={n.id === plan.currentDay}
                />
            ))}

            <Selection column={(plan.currentDay % weekDuration + 1)} row={1} endRow={9}/>
        </PlanContainer>
    );
}

function fetchPlan(): Promise<IPlan> {
    return Promise.resolve(planApi);
}

export { Plan };
