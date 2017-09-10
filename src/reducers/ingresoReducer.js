export default function ingresoReducer(state = [], action){
    switch(action.type){
        case "CREATE_INGRESO":
            //state.push(action.ingreso);
            //return state;
            return [...state,
            Object.assign({}, action.ingreso)
            ];

        default:
            return state;
    }
}