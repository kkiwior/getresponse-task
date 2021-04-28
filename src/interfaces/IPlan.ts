export enum MealType {
    LowCarb = 'LOW-CARB',
    HighCarb = 'HIGH-CARB',
    GuiltFree = 'GUILT-FREE',
}

export interface IMeal {
    id: number;
    name: string;
    image?: string;
    isCompleted: boolean;
}

export interface IDay {
    id: number;
    meals: IMeal[];
    type: MealType;
    isWorkoutDone: boolean;
}

export interface IPlan {
    currentDay: number;
    timeTable: string[];
    days: IDay[];
}
