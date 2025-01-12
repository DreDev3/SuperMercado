import * as types from '../types';


const initialState = {
  botaoCLicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoCLicado = !newState.botaoCLicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAIL: {
      console.log('Deu erro =(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
console.log('Estou realizando a requisição...');
      return state;
    }


    default:
      return state;
  }
};
