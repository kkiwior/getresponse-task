import { IPlanContext, PlanContext } from '../contexts/PlanContext';
import React from 'react';

export function usePlan(): IPlanContext {
    const context = React.useContext(PlanContext);
    if (context === null) {
        throw new Error('PlanContext cannot be null.');
    }
    return context;
}
