import React, { ReactElement } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Profile } from './Profile/Profile';
import { HeaderContainer, HeaderWrapper } from './style';

function Header(): ReactElement {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Navigation/>
                <Profile/>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export { Header };
