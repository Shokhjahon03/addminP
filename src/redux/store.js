import {  createStore } from 'redux';
import reducer from './teach/teachersReducer';

const store = createStore(reducer);

export default store;