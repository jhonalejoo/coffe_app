import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import coffeeReducer from './features/coffee/reducers';
import commentReducer from './features/comment/reducers';
import IndexSagas from './index-saga';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      coffee:coffeeReducer,
      comment: commentReducer
    },
    middleware:[sagaMiddleWare]
  })
  sagaMiddleWare.run(IndexSagas)
  
  export default store;