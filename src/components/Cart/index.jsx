import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import produto from '../../images/produto.png';
import add from '../../images/mais.png';
import remove from '../../images/menos.png';
import { Button, Main } from './styled';
import * as actions from '../../store/modules/example/actions';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.cart) || [];

  const handleAddToCart = (product) => {
    dispatch(actions.cartAdd(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(actions.cartRemove(productId));
  };

  const handleSubmit = () => {
    toast.success('Sua compra foi finalizada com sucesso.');
    dispatch(actions.cartClear());
    navigate('/');
  };

  if (!Array.isArray(cart)) {
    return <p>Erro: cart não é um array.</p>;
  }

  return (
    <Container>
      <Main>
        <h1>Carrinho de Compras</h1>
        <div className='offer'>
          {cart.length === 0 ? (
            <p>O carrinho está vazio</p>
          ) : (
            cart.map(item => {
              return (
                <div key={item.id}>
                  <div className='product'>
                    <img src={produto} alt={item.title} />
                    <h4 className='title'>{item.title}</h4>
                    <h6>R${item.price}</h6>
                    <div className="purchase">
                      <div className="more" onClick={() => handleAddToCart(item)}>
                        <img src={add} alt="adicionar" />
                      </div>
                      <div className='quant'>{item.quantity}</div>
                      <div className="less" onClick={() => handleRemoveFromCart(item.id)}>
                        <img src={remove} alt="remover" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cart.length > 0 ? <Button type='submit' onClick={handleSubmit}>Finalizar compra</Button> : ''}
      </Main>
    </Container>
  );
};
