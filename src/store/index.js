// src/modules/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'; // persistStore para criar o persistor
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import reduxPersist from './modules/reduxPersist'; // A função que aplica o persistReducer

const sagaMiddleware = createSagaMiddleware();

// Aplicando o persistReducer com o rootReducer
const store = createStore(
  reduxPersist(rootReducer), // Aplicando a persistência ao rootReducer
  applyMiddleware(sagaMiddleware) // Aplicando o middleware do Redux-Saga
);

// Executando o Saga
sagaMiddleware.run(rootSaga);

// Criando o persistor (necessário para o PersistGate)
export const persistor = persistStore(store);

export default store; // Exportando o store configurado
