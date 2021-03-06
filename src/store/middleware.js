import {applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middlewareList = [];
middlewareList.push(thunk);
middlewareList.push(createLogger());

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;

