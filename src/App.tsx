import React from 'react';
import {Header} from "./components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import {Dashboard} from "./components/Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Container>
                    <Switch>
                        <Route path="/">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/recipes">
                            <Dashboard></Dashboard>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

const Container = styled.section`
  margin: 24px auto 0;
  max-width: 978px;
`;

export default App;
