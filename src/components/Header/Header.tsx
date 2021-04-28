import React, { ReactElement } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Profile } from './Profile/Profile';
import { HeaderContainer, HeaderWrapper } from './style';

export function Header(): ReactElement {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Navigation/>
                <Profile/>
            </HeaderWrapper>
        </HeaderContainer>
    );
}
