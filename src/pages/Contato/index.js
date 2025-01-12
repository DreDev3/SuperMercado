import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Main, Social, Title } from './styled';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from 'react-icons/sl';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function Contato() {

  return (
    <Container>
      <Title>Contato</Title>
      <Main>
        <h2>Siga<br /><span>Supermercado</span><span>Horti-Fruit</span> <br />nas redes sociais.
        </h2>
        <Social>
          <Link to='#'>
            <div className='instagram'>
              <span>Instagram</span>
              <SlSocialInstagram size={36} />
            </div>
          </Link>

          <Link to='#'>
            <div className='facebook'>
              <span>Facebook</span>
              <SlSocialFacebook size={36} />
            </div>
          </Link>

          <Link to='#'>
            <div className='linkedin'>
              <span>LinkedIn</span>
              <SlSocialLinkedin size={36} />
            </div>
          </Link>

          <Link to='#'>
            <div className='email'>
              <span>E-mail</span>
              <MdEmail size={36} />
            </div>
          </Link>
        </Social>
      </Main>
    </Container>
  );
}
