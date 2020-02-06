import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const configureStore = initialStore => {
    const store = createStore(reducer, initialStore, middleware);
    return store;
}

export default configureStore;