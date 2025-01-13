import { all, put, takeEvery } from 'redux-saga/effects';

import { cartSet } from './example/actions';
import * as types from '../modules/types';

function* addToCartSaga(action) {
  try {
    // Aqui você pode fazer uma chamada para uma API real
    console.log('Adicionando ao carrinho:', action.payload);
    // Simulando uma resposta
    yield put(cartSet([action.payload])); // Atualiza o carrinho com o novo produto
  } catch (e) {
    console.error('Erro ao adicionar produto', e);
  }
}

function* removeFromCartSaga(action) {
  try {
    // Aqui você pode fazer uma chamada para uma API real
    console.log('Removendo do carrinho:', action.payload);
    yield put(cartSet([])); // Exemplo, atualizar o carrinho após remoção
  } catch (e) {
    console.error('Erro ao remover produto', e);
  }
}

// Assistir as actions
function* watchCartActions() {
  yield takeEvery(types.CART_ADD, addToCartSaga);
  yield takeEvery(types.CART_REMOVE, removeFromCartSaga);
}

export default function* rootSaga() {
  yield all([
    watchCartActions(),
  ]);
}
