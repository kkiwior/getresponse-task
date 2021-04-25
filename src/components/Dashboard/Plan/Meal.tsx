import {Cell, IMeal} from "./Plan";
import styled from "styled-components";
import React from "react";

interface IMealProps {
    meal: IMeal;
    column: number;
    row: number;
    active: boolean;
}

function Meal(props: IMealProps){
    return (
        <Cell className="meal" column={props.column} row={props.row} active={props.active}>
            <MealName>{props.meal.name}</MealName>
        </Cell>
    );
}

const MealName = styled.p`
  margin: 12px 12px 0;
`;

export {Meal}