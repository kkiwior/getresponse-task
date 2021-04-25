import React, { ReactElement } from 'react';
import { ProteinsContainer, Proteins, Title } from './style';
import { Protein } from './Protein';
import vegetablePng from '../../../resources/images/proteins/png/vegetable.png';
import vegetableEnabledPng from '../../../resources/images/proteins/png/vegetable-enabled.png';
import vegetableWebp from '../../../resources/images/proteins/webp/vegetable.webp';
import vegetableEnabledWebp from '../../../resources/images/proteins/webp/vegetable-enabled.webp';
import dairyPng from '../../../resources/images/proteins/png/dairy.png';
import dairyEnabledPng from '../../../resources/images/proteins/png/dairy-enabled.png';
import dairyWebp from '../../../resources/images/proteins/webp/dairy.webp';
import dairyEnabledWebp from '../../../resources/images/proteins/webp/dairy-enabled.webp';
import fishPng from '../../../resources/images/proteins/png/fish.png';
import fishEnabledPng from '../../../resources/images/proteins/png/fish-enabled.png';
import fishWebp from '../../../resources/images/proteins/webp/fish.webp';
import fishEnabledWebp from '../../../resources/images/proteins/webp/fish-enabled.webp';
import meatPng from '../../../resources/images/proteins/png/meat.png';
import meatEnabledPng from '../../../resources/images/proteins/png/meat-enabled.png';
import meatWebp from '../../../resources/images/proteins/webp/meat.webp';
import meatEnabledWebp from '../../../resources/images/proteins/webp/meat-enabled.webp';
import chickenPng from '../../../resources/images/proteins/png/chicken.png';
import chickenEnabledPng from '../../../resources/images/proteins/png/chicken-enabled.png';
import chickenWebp from '../../../resources/images/proteins/webp/chicken.webp';
import chickenEnabledWebp from '../../../resources/images/proteins/webp/chicken-enabled.webp';

function ProteinsSelector(): ReactElement {
    return (
        <ProteinsContainer>
            <Title>Select your protein options</Title>
            <Proteins>
                <Protein name="Vegetable"
                    selected={[vegetableEnabledPng, vegetableEnabledWebp]}
                    notSelected={[vegetablePng, vegetableWebp]}
                />
                <Protein name="Dairy"
                    selected={[dairyEnabledPng, dairyEnabledWebp]}
                    notSelected={[dairyPng, dairyWebp]}
                />
                <Protein name="Meat"
                    selected={[meatEnabledPng, meatEnabledWebp]}
                    notSelected={[meatPng, meatWebp]}
                />
                <Protein name="Fish"
                    selected={[fishEnabledPng, fishEnabledWebp]}
                    notSelected={[fishPng, fishWebp]}
                />
                <Protein name="Chicken"
                    selected={[chickenEnabledPng, chickenEnabledWebp]}
                    notSelected={[chickenPng, chickenWebp]}
                />
            </Proteins>
        </ProteinsContainer>
    );
}

export { ProteinsSelector };
