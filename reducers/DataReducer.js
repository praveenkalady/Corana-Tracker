import { LOAD_DATA,SET_THEME,SEARCH_DATA,LOAD_COUNTRIES,OFF_THEME } from '../actions/types';
const initialState = {
    data: [],
    countries: [],
    isLoading:true,
    dark:false
}

export default function DataReducer(state=initialState, action){
    const { type,payload } = action;
    switch(type){
        case LOAD_DATA:
            return{
                ...state,
                data:payload,
                isLoading:false
            }
        case SET_THEME:
            return {
                ...state,
                dark:true
            }
        case OFF_THEME:
            return{
                ...state,
                dark:false
            }
        case LOAD_COUNTRIES:
            return{
                ...state,
                countries:payload,
                isLoading:false
            }
        case SEARCH_DATA:
            if(payload.length > 0){
                return {
                    ...state,
                    countries:state.countries.filter(country => country.country.startsWith(payload))
                }
            } else{
                return state;
            }          
        default:
            return state;
    }
}