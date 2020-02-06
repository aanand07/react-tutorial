import { actionTypes } from './actions';

const getInitialState = () => {
    return {theme: 'dark'}
};

const app = (state = getInitialState(), {type, payload}) => {
    switch(type){
        case actionTypes.SET_THEME:
            return {
                ...state, ...payload
            }
        default:
            return state;
    }

}

export default app;