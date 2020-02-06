import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import { actionTypes } from './store/app/actions';
import * as serviceWorker from './serviceWorker';
import NameForm from './components/App/App';
import GlobalStyles from './styles/global';

// GlobalStyles();

const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);
    store.dispatch({ type: actionTypes.SET_THEME});
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <GlobalStyles/>
            <NameForm />
            </div>
        </Provider>,
        document.getElementById('root'));
}

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
