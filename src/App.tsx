import React, { ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';
import { NotImplemented } from './components/NotImplemented/NotImplemented';

const Container = styled.section`
  margin: 24px auto 0;
  max-width: 978px;
`;

function App(): ReactElement {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Container>
                    <Switch>
                        <Redirect exact={true} from="/" to="dashboard" />
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/recipes" component={NotImplemented}/>
                        <Route path="/challenge" component={NotImplemented}/>
                    </Switch>
                </Container>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
