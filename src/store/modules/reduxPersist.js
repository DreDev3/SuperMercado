import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'APP-MERCADO',
      storage,
      whitelist: ['cart'],
    },
    reducers
  );
  return persistedReducers;
};
