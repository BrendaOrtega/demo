import initialState from './initialState';

export default function ingresoReducer(state = initialState.tipos, action){
    switch(action.type){
        case "LOAD_TIPOS_SUCCESS":
            return action.tipos;
        default:
            return state;
    }
}