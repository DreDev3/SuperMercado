import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Main } from './styled';
import produto from '../../images/produto.png';
import add from '../../images/mais.png';
import remove from '../../images/menos.png';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/example/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(actions.cartAdd(product));
    };

    const handleRemoveFromCart = (productId) => {
      dispatch(actions.cartRemove(productId));
    };

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
                <div className="more" onClick={() => handleAddToCart(product)}>
                  <img src={add} alt="adicionar" />
                </div>

                <div className="less" onClick={() => handleRemoveFromCart(product.id)}>
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
