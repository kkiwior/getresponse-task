import React, { ReactElement } from 'react';
import { Title, Message, ContentContainer, ButtonContainer } from '../style';

interface IContentProps {
    title: string;
    message: string;
    buttons: React.ReactElement[];
}

export function Content(props: IContentProps): ReactElement {
    return (
        <ContentContainer>
            <Title>{props.title}</Title>
            <Message>{props.message}</Message>
            <ButtonContainer>
                {props.buttons}
            </ButtonContainer>
        </ContentContainer>
    );
}
