import React, { ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard/Dashboard';

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
                        <Route path="/">
                            <Dashboard/>
                        </Route>
                        <Route path="/recipes">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;
