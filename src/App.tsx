import React, { ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Footer } from './components/Footer/Footer';

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
                        <Route path="/">
                            <Dashboard/>
                        </Route>
                        <Route path="/recipes">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </Container>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
