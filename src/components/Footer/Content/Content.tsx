import React, { ReactElement } from 'react';
import { Title, Message, ContentContainer, ButtonContainer } from '../style';
import { Button, IButton } from './Button';

interface IContentProps {
    title: string;
    message: string;
    buttons: IButton[];
}

export function Content(props: IContentProps): ReactElement {
    return (
        <ContentContainer>
            <Title>{props.title}</Title>
            <Message>{props.message}</Message>
            <ButtonContainer>
                {props.buttons.map((button) => (
                    <Button key={button.message} icon={button.icon} message={button.message} href={button.href}/>
                ))}
            </ButtonContainer>
        </ContentContainer>
    );
}
