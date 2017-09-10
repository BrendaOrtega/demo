import {combineReducers} from 'redux';
import ingresos from './ingresoReducer';


const rootReducer = combineReducers({
   ingresos
});

export default rootReducer;