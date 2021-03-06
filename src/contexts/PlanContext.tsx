import React, { useCallback, useMemo, useState } from 'react';
import { IDay, IMeal, IPlan } from '../interfaces/IPlan';

interface Props {
    children: React.ReactNode;
}

export interface IPlanContext {
    plan: IPlan | undefined;
    changePlan(planData: IPlan): void;
    toggleWorkoutStatus(dayId: number): void;
    toggleMealStatus(dayId: number, mealId: number): void;
}

export const PlanContext = React.createContext<IPlanContext | null>(null);

export function PlanProvider(props: Props): React.ReactElement {
    const [plan, setPlan] = useState<IPlan>();

    const changePlan: IPlanContext['changePlan'] = useCallback((planData) => {
        setPlan(planData);
    }, []);

    const toggleWorkoutStatus: IPlanContext['toggleWorkoutStatus'] = useCallback((dayId) => {
        if (plan === undefined) {
            return;
        }
        const days: IDay[] = plan.days.map((day: IDay) => {
            if (dayId === day.id) {
                return { ...day, isWorkoutDone: !day.isWorkoutDone };
            }
            return day;
        });
        setPlan({ ...plan, days });
    }, [plan]);

    const toggleMealStatus: IPlanContext['toggleMealStatus'] = useCallback((dayId, mealId) => {
        if (plan === undefined) {
            return;
        }
        const days: IDay[] = plan.days.map((day: IDay) => {
            if (dayId === day.id) {
                day.meals = day.meals.map((meal: IMeal) => {
                    if (meal.id === mealId) {
                        return { ...meal, isCompleted: !meal.isCompleted };
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
