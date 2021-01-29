import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Task from './pages/Task';
import Main from './pages/Main';
import TaskUpdate from './pages/TaskUpdate';

const Routes = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/task-update/:id?" component={TaskUpdate} />
        <Route path="/task" component={Task} />

    </Switch>
    </BrowserRouter>
);

export default Routes;