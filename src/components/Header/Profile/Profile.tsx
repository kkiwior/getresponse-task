import React, { ReactElement } from 'react';
import { ReactComponent as Arrow } from 'resources/icons/arrow.svg';
import { ProfileContainer, ProfileImage, ProfileName } from './style';

function Profile(): ReactElement {
    return (
        <ProfileContainer>
            <ProfileImage/>
            <ProfileName>Olivia Wilde</ProfileName>
            <Arrow/>
        </ProfileContainer>
    );
}

export { Profile };
