import React, { ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from './style';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';
import { NotImplemented } from './components/NotImplemented/NotImplemented';

export function App(): ReactElement {
    return (
        <Router>
            <Header/>
            <AppContainer>
                <Switch>
                    <Redirect exact={true} from="/" to="dashboard" />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/recipes" component={NotImplemented}/>
                    <Route path="/challenge" component={NotImplemented}/>
                </Switch>
            </AppContainer>
            <Footer/>
        </Router>
    );
}
