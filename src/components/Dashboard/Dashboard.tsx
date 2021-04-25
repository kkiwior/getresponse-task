import React, { ReactElement } from 'react';
import { Progressbar } from './Progressbar/Progressbar';
import { WeekSlider } from './WeekSlider/WeekSlider';
import { ProteinsSelector } from './ProteinsSelector/ProteinsSelector';
import { Plan } from './Plan/Plan';
import { PlanProvider } from '../../contexts/PlanContext';
import { MainContainer } from './style';

function Dashboard(): ReactElement {
    return (
        <React.Fragment>
            <MainContainer>
                <Progressbar currentState={7} maxWeek={12}/>
                <WeekSlider currentWeek={7} maxWeek={12}/>
                <ProteinsSelector/>
            </MainContainer>
            <PlanProvider>
                <Plan/>
            </PlanProvider>
        </React.Fragment>

    );
}

export { Dashboard };
