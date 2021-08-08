import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'inversify-react';
import Container from './inversify.config';
import './App.scss';
import { routes } from './routes';

const App: React.FC = () => {
    return (
        <Provider container={Container}>
            <Router>
                <Switch>
                    {routes.map((route, i) => (
                        <Route exact path={route.path} component={route.component} key={i} />
                    ))}
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
