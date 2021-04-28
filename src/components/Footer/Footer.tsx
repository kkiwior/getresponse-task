import React, { ReactElement } from 'react';
import { FooterContainer } from './style';
import { Content } from './Content/Content';
import appleIcon from '../../resources/images/apple.png';
import androidIcon from '../../resources/images/android.png';
import { Button } from './Content/Button';

export function Footer(): ReactElement {
    return (
        <FooterContainer>
            <Content
                title="Running out of products?"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[<Button key="buy" message="Buy now" href="https://google.com"/>]}
            />
            <Content
                title="Bod•ē Trainer in your pocket"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[<Button key="iOS" message="iOS" icon={appleIcon} href="https://google.com"/>,
                    <Button key="Android" message="Android" icon={androidIcon} href="https://google.com"/>]}
            />
            <Content
                title="Frequently Asked Questions"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[<Button key="faq" message="Read FAQs" href="https://google.com"/>]}
            />
        </FooterContainer>
    );
}
