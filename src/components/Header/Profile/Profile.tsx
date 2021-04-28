import React, { ReactElement } from 'react';
import { ReactComponent as Arrow } from '../../../resources/icons/arrow.svg';
import { ProfileContainer, ProfileImage, ProfileName } from './style';
import { useMedia } from '../../../hooks/useMedia';

export function Profile(): ReactElement {
    const isMobile = useMedia('(max-width: 500px)');

    return (
        <ProfileContainer>
            <ProfileImage/>
            {isMobile ? null : <ProfileName>Olivia Wilde</ProfileName>}
            <Arrow/>
        </ProfileContainer>
    );
}
