import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Ingresos from './components/table/TableContainer';
import Gastos from './components/tableGastos/TableContainer';
import Caja from './components/caja/TableContainer';
import Resumen from './components/resumen/Resumen';






const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ingresos" component={Ingresos} />
        <Route path="/gastos" component={Gastos} />
        <Route path="/caja" component={Caja} />
        <Route path="/resumen" component={Resumen} />
    </Switch>
);

export default Routes