import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import CheckoutPage from './CheckoutPage';
import AdminPage from './AdminPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </Router>
    );
}

export default App;
