import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Task from './pages/Task';

const Routes = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/task" component={Task} />

    </Switch>
    </BrowserRouter>
);

export default Routes;