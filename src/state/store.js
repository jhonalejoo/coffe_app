import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import coffeeReducer from './features/coffee/reducers';
import coffeeSagas from './features/coffee/sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coffee:coffeeReducer
    },
    middleware:[sagaMiddleWare]
  })
  sagaMiddleWare.run(coffeeSagas)
  
  export default store;