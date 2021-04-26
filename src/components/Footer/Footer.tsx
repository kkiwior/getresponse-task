import React, { ReactElement } from 'react';
import { FooterContainer } from './style';
import { Content } from './Content/Content';
import appleIcon from 'resources/images/apple.png';
import androidIcon from 'resources/images/android.png';

export function Footer(): ReactElement {
    return (
        <FooterContainer>
            <Content
                title="Running out of products?"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[{ message: 'Buy now', href: 'https://google.com' }]}
            />
            <Content
                title="Bod•ē Trainer in your pocket"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[{ message: 'iOS', icon: appleIcon, href: 'https://google.com' },
                    { message: 'Android', icon: androidIcon, href: 'https://google.com' }]}
            />
            <Content
                title="Frequently Asked Questions"
                message="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
                buttons={[{ message: 'Read FAQs', href: 'https://google.com' }]}
            />
        </FooterContainer>
    );
}
