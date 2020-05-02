import { LOAD_DATA,SEARCH_DATA,LOAD_COUNTRIES,SET_THEME,OFF_THEME } from './types';
import axios from 'react-native-axios';
export const getData = () => async dispatch => {
    const data = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    dispatch({
        type:LOAD_DATA,
        payload: data.data
    })
}

export const searchData = (searchdata) => dispatch => {
    dispatch({
        type:SEARCH_DATA,
        payload: searchdata
    })
}

export const loadCountries = () => async dispatch => {
    const data = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    dispatch({
        type:LOAD_COUNTRIES,
        payload:data.data
    })
}
export const onDark = () => dispatch =>{
    dispatch({
        type:SET_THEME
    });
}

export const offDark = () => dispatch => {
    dispatch({
        type:OFF_THEME
    });
}