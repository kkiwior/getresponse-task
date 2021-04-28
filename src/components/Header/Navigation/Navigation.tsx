import React, { ReactElement } from 'react';
import { NavigationContainer, NavigationLink } from './style';

export function Navigation(): ReactElement {
    return (
        <NavigationContainer>
            <NavigationLink to="/dashboard" activeClassName="active">Dashboard</NavigationLink>
            <NavigationLink to="/recipes" activeClassName="active">Recipes</NavigationLink>
            <NavigationLink to="/challenge" activeClassName="active">Challenge</NavigationLink>
        </NavigationContainer>
    );
}

