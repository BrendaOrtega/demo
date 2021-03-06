import initialState from './initialState';

export default function ingresoReducer(state = initialState.ingresos, action){
    switch(action.type){
        case "LOAD_INGRESOS_SUCCESS":
            return action.ingresos;

        case "SAVE_NEW_INGRESO_SUCCESS":
            return [...state,
                Object.assign({},action.ingreso)
            ];
        case "CREATE_INGRESO":
            //state.push(action.ingreso);
            //return state;
            return [...state,
            Object.assign({}, action.ingreso)
            ];
        case "UPDATE_INGRESO_SUCCESS":
            return state;

        case "LOAD_TIPOS_SUCCESS":
            return action.tipos;
        default:
            return state;
    }
}