import {combineReducers} from 'redux';
import ingresos from './ingresoReducer';
import tipos from './tipoReducer';


const rootReducer = combineReducers({
   ingresos,
    tipos
});

export default rootReducer;