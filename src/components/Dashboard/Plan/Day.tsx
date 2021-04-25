import React from "react";
import {Cell, IDay} from "./Plan";
import {Meal} from "./Meal";

interface IDayParams {
    day: IDay;
    column: number;
    active: boolean;
}

function Day(props: IDayParams){
    return (
        <React.Fragment>
            <Cell className="day" column={props.column} row={1} active={props.active}>Day {props.day.day}</Cell>
            {props.day.meals.map(function (n, index){
                return <Meal key={index} column={props.column} row={index + 2} meal={n} active={props.active}></Meal>;
            })}
            {props.day.type === "GUILT-FREE" ? <Cell className="guilt-free" column={props.column} row={2} endRow={7}>GUILT FREE DAY</Cell> : <Cell className="type" column={props.column} row={7}>{props.day.type}</Cell>}
            <Cell className="workout" column={props.column} row={8}>{props.day.isWorkoutDone ? "ZROBIONY" : "NIE"}</Cell>
        </React.Fragment>
    );
}

export {Day}