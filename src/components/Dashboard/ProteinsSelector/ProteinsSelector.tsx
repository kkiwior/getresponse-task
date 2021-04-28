import React, { ReactElement } from 'react';
import { ProteinsContainer, Proteins, Title } from './style';
import { Protein } from './Protein';
import vegetablePng from './images/png/vegetable.png';
import vegetableEnabledPng from './images/png/vegetable-enabled.png';
import vegetableWebp from './images/webp/vegetable.webp';
import vegetableEnabledWebp from './images/webp/vegetable-enabled.webp';
import dairyPng from './images/png/dairy.png';
import dairyEnabledPng from './images/png/dairy-enabled.png';
import dairyWebp from './images/webp/dairy.webp';
import dairyEnabledWebp from './images/webp/dairy-enabled.webp';
import fishPng from './images/png/fish.png';
import fishEnabledPng from './images/png/fish-enabled.png';
import fishWebp from './images/webp/fish.webp';
import fishEnabledWebp from './images/webp/fish-enabled.webp';
import meatPng from './images/png/meat.png';
import meatEnabledPng from './images/png/meat-enabled.png';
import meatWebp from './images/webp/meat.webp';
import meatEnabledWebp from './images/webp/meat-enabled.webp';
import chickenPng from './images/png/chicken.png';
import chickenEnabledPng from './images/png/chicken-enabled.png';
import chickenWebp from './images/webp/chicken.webp';
import chickenEnabledWebp from './images/webp/chicken-enabled.webp';

export function ProteinsSelector(): ReactElement {
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

