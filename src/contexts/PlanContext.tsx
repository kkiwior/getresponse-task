import React, { useCallback, useMemo, useState } from 'react';
import { IDay, IMeal, IPlan } from '../interfaces/IPlan';

interface Props {
    children: React.ReactNode;
}

export interface IPlanContext {
    plan: IPlan;

    changePlan(planData: IPlan): void;

    toggleWorkoutStatus(dayId: number): void;

    toggleMealStatus(dayId: number, mealId: number): void;
}

export const PlanContext = React.createContext<IPlanContext | null>(null);

function PlanProvider(props: Props): React.ReactElement {
    const init: IPlan = { currentDay: 65, days: [], timeTable: [] };
    const [plan, setPlan] = useState<IPlan>(init);

    const changePlan: IPlanContext['changePlan'] = useCallback((planData) => {
        setPlan(planData);
    }, []);

    const toggleWorkoutStatus: IPlanContext['toggleWorkoutStatus'] = useCallback((dayId) => {
        const days: IDay[] = plan.days.map((day: IDay) => {
            if (dayId === day.id) {
                day.isWorkoutDone = !day.isWorkoutDone;
            }
            return day;
        });
        setPlan({ ...plan, days });
    }, [plan]);

    const toggleMealStatus: IPlanContext['toggleMealStatus'] = useCallback((dayId, mealId) => {
        const days: IDay[] = plan.days.map((day: IDay) => {
            if (dayId === day.id) {
                day.meals = day.meals.map((meal: IMeal) => {
                    if (meal.id === mealId) {
                        meal.isCompleted = !meal.isCompleted;
                    }
                    return meal;
                });
            }
            return day;
        });
        setPlan({ ...plan, days });
    }, [plan]);

    const api: IPlanContext = useMemo(() => ({
        plan,
        changePlan,
        toggleWorkoutStatus,
        toggleMealStatus,
    }), [plan, changePlan, toggleWorkoutStatus, toggleMealStatus]);

    return (
        <PlanContext.Provider value={api}>
            {props.children}
        </PlanContext.Provider>
    );
}

export { PlanProvider };
