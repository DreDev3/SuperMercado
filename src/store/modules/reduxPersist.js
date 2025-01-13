import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'APP-MERCADO', // Chave que será usada no localStorage
      storage, // Utiliza o localStorage
      whitelist: ['cart'], // Apenas o estado 'cart' será persistido
    },
    reducers
  );
  return persistedReducers;
};
