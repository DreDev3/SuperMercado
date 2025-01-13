import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';
import produto from '../../images/produto.png';
import add from '../../images/mais.png';
import remove from '../../images/menos.png';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { useCart } from '../../services/CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { removeFromCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      async function getData() {
        setIsLoading(true);
        const response = await axios.get('/products');
        setProducts(response.data);
        setIsLoading(false);
      }
      getData();
    } catch (err) {
      console.log(err);
    }


  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Main className="homeContent">
        <h1>Promoções</h1>
        <div className="date">00/00/0000 até 00/00/0000</div>
        <div className="offer">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={produto} alt={product.title} />
              <h4 className='title'>{product.title}</h4>
              {/* <h6 className='description'>{product.description}</h6> */}
              <h6>R${product.price}</h6>
              <div className="purchase">
                <div className="more" onClick={() => addToCart(product)}>
                  <img src={add} alt="adicionar" />
                </div>

                <div className="less" onClick={() => removeFromCart(product.id)}>
                  <img src={remove} alt="remover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Main>
    </Container>
  );
}
