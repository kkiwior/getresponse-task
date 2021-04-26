import React, { ReactElement, useEffect } from 'react';
import planApi from 'resources/planApi.json';
import { Day } from './Elements/Day';
import { usePlan } from 'hooks/usePlan';
import { PlanContainer, Cell, Arrow, Selection } from './style';
import { IPlan } from 'interfaces/IPlan';
import { useMedia } from 'hooks/useMedia';

export function Plan(): ReactElement {
    const { plan, changePlan } = usePlan();
    const isMobile = useMedia('(max-width: 978px)');

    const weekDuration = 7;

    useEffect(() => {
        fetchPlan().then((planData: IPlan) => changePlan(planData));
    }, [changePlan]);

    return (
        <PlanContainer id="plan" column={plan.currentDay % weekDuration + 1}>
            {isMobile ? <MobileLayout plan={plan}/> : <DesktopLayout plan={plan}/>}
        </PlanContainer>
    );
}

interface IPlanProps {
    plan: IPlan;
}

function DesktopLayout({ plan }: IPlanProps): ReactElement {
    const weekDuration = 7;

    return (
        <React.Fragment>
            {plan.timeTable.map((n, index) => (
                <Cell
                    className="time"
                    key={index}
                    position={{
                        column: 1,
                        row: index + 2,
                    }}
                >
                    {n}
                </Cell>))}

            <Cell
                className="workout"
                position={{
                    row: 8,
                    column: 1,
                }}
            >
                Workout <Arrow/>
            </Cell>

            {plan.days.map((n, index) => (
                <Day
                    key={index}
                    column={index + 2}
                    day={n}
                    isCurrent={n.id === plan.currentDay}
                    isActive={n.id <= plan.currentDay}
                />
            ))}
            <Selection
                position={{
                    column: plan.currentDay % weekDuration + 1,
                    row: 1,
                    endRow: 9,
                }}
            />
        </React.Fragment>
    );
}

function MobileLayout({ plan }: IPlanProps): ReactElement {
    const weekDuration = 7;

    return (
        <React.Fragment>
            {plan.days.map((day, index) => (day.type === 'LOW-CARB' || 'HIGH-CARB') ?
                plan.timeTable.map((time, rowIndex) =>
                    (
                        <Cell
                            key={index * weekDuration + rowIndex}
                            position={{
                                column: 1,
                                row: index * weekDuration + (rowIndex + 1) + 1,
                            }}
                            className="time"
                        >
                            {time}
                        </Cell>
                    ),
                ) : null,
            )}

            {plan.days.map((day, index) => (
                <Day
                    key={index}
                    column={index}
                    day={day}
                    isCurrent={day.id === plan.currentDay}
                    isActive={day.id <= plan.currentDay}
                    isMobile={true}
                />
            ))}
            <Selection
                position={{
                    column: 1,
                    row: plan.currentDay % (weekDuration + 1) * weekDuration + 1,
                    endColumn: 3,
                    endRow: plan.currentDay % (weekDuration + 1) * weekDuration + weekDuration + 1,
                }}
            />
        </React.Fragment>
    );
}

function fetchPlan(): Promise<IPlan> {
    return Promise.resolve(planApi);
}
