import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';
import produto from '../../images/produto.png';
import add from '../../images/mais.png';
import remove from '../../images/menos.png';
import axios from '../../services/axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/products');
      setProducts(response.data);
    }

    getData();
  }, []);
  return (
    <Container>
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
              <div className="more">
                <img src={add} alt="adicionar" />
              </div>

              <div className="less">
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
