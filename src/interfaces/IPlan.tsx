export interface IMeal {
    id: number;
    name: string;
    isCompleted: boolean;
}

export interface IDay {
    id: number;
    meals: IMeal[];
    type: string;
    isWorkoutDone: boolean;
}

export interface IPlan {
    currentDay: number;
    timeTable: string[];
    days: IDay[];
}
