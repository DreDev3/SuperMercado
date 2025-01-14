import { all, takeEvery } from 'redux-saga/effects';
import * as types from '../modules/types';

// Função de observar a adição ao carrinho
function* watchCartActions() {
  yield takeEvery(types.CART_ADD, (action) => {
    console.log('Adicionando ao carrinho:', action.payload);
    // Aqui o próprio reducer já gerencia a adição, então não há necessidade de um put
  });

  // Função para observar a remoção do carrinho
  yield takeEvery(types.CART_REMOVE, (action) => {
    console.log('Removendo do carrinho:', action.payload);
    // Aqui também, o reducer gerencia a remoção
  });
}

// Função que gerencia todas as sagas
export default function* rootSaga() {
  yield all([
    watchCartActions(), // Observa as ações de carrinho
  ]);
}
