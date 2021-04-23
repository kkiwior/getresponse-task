import React from "react";
import {Progressbar} from "./Progressbar/Progressbar";
import styled from "styled-components";
import {WeekSlider} from "./WeekSlider/WeekSlider";
import {ProteinsSelector} from "./ProteinsSelector/ProteinsSelector";

function Dashboard() {
    return (
        <MainContainer>
            <Progressbar currentState={7} maxWeek={12}></Progressbar>
            <WeekSlider currentWeek={7} maxWeek={12}></WeekSlider>
            <ProteinsSelector></ProteinsSelector>
        </MainContainer>
    );
}

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  font-size: 9px;
  font-weight: 400;
  color: #bdbdbd;
`;

export {Dashboard}