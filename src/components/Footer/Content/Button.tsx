import { ButtonIcon, ButtonText, StyledButton } from '../style';
import { ReactComponent as Arrow } from '../../../resources/icons/arrow.svg';
import React, { ReactElement, useCallback } from 'react';

export interface IButton {
    message: string;
    icon?: string;
    href: string;
}

export function Button(props: IButton): ReactElement {
    const handleButtonClick = useCallback(() => {
        window.open(props.href, '_blank');
    }, [props.href]);

    return (
        <StyledButton onClick={handleButtonClick}>
            {props.icon ? <ButtonIcon src={props.icon} alt={props.message} width="18px" height="21px"/> : null}
            <ButtonText>{props.message}</ButtonText>
            <Arrow viewBox="0 3 16 9"/>
        </StyledButton>
    );
}
