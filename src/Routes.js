import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Ingresos from './components/table/TableContainer';
import Gastos from './components/tableGastos/TableContainer';
import Caja from './components/caja/TableContainer';







const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ingresos" component={Ingresos} />
        <Route path="/gastos" component={Gastos} />
        <Route path="/caja" component={Caja} />
    </Switch>
);

export default Routes