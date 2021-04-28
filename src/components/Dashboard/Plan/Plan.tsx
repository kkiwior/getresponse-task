import React, { ReactElement, useEffect } from 'react';
import { IPlan, MealType } from '../../../interfaces/IPlan';
import planApi from '../../../resources/planApi.json';
import { Day } from './Elements/Day';
import { usePlan } from '../../../hooks/usePlan';
import { Arrow, Cell, PlanContainer, Selection } from './style';
import { useMedia } from '../../../hooks/useMedia';

const weekDuration = 7;

export function Plan(): ReactElement {
    const { plan, changePlan } = usePlan();
    const isMobile = useMedia('(max-width: 978px)');

    useEffect(() => {
        fetchPlan().then(changePlan);
    }, [changePlan]);

    if (plan === undefined) {
        return <div>Fetching plan...</div>;
    }

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
    return (
        <React.Fragment>
            {plan.timeTable.map((time, index) => (
                <Cell
                    className="time"
                    key={index}
                    position={{
                        column: 1,
                        row: index + 2,
                    }}
                >
                    <span>{time.split(' ')[0]}</span>
                    {time.split(' ')[1]}
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

            {plan.days.map((day, index) => (
                <Day
                    key={index}
                    column={index + 2}
                    day={day}
                    isCurrent={day.id === plan.currentDay}
                    isActive={day.id <= plan.currentDay}
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
    return (
        <React.Fragment>
            {plan.days.map((day, index) => (day.type === MealType.LowCarb || day.type === MealType.HighCarb) ?
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
    return Promise.resolve(planApi as IPlan);
}
