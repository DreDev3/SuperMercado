import React from 'react';

import { useCart } from '../../services/CartContext';
import { Container } from '../../styles/GlobalStyles';
import produto from '../../images/produto.png';
import add from '../../images/mais.png';
import remove from '../../images/menos.png';
import { Main } from './styled';

export const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

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
                      <div className="more" onClick={() => addToCart(item)}>
                        <img src={add} alt="adicionar" />
                      </div>
                      <div className='quant'>{item.quantity}</div>
                      <div className="less" onClick={() => removeFromCart(item.id)}>
                        <img src={remove} alt="remover" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Main>
    </Container>
  );
};
