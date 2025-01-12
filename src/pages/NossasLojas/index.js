import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Main, Image, Title } from './styled';
import logoLoja from '../../images/logo-loja.png';


export default function Receitas() {

  return (
    <Container>
      <Title>Nossas Lojas</Title>
      <Main>
      <section className="storeOne">
            <div className="infoLoja right">
                <h1>Supermercado Hort-Fruit 01</h1>
                <p><strong>Endereço:</strong> Rua ficticia lorem, Nº 999</p>
                <p><strong>Segunda a Sabado das 07:30 as 22:00<br />
                Domingo das 09:00 as 13:30</strong></p>
            </div>
            <div className="image">
                <Image src={logoLoja} alt="" />
            </div>
        </section>

        <section className="storeOne">
            <div className="image">
                <Image src={logoLoja} alt="" />
            </div>
            <div className="infoLoja">
            <h1>Supermercado Hort-Fruit 02</h1>
                <p><strong>Endereço:</strong> Rua ficticia lorem, Nº 999</p>
                <p><strong>Segunda a Sabado das 07:30 as 22:00<br />
                Domingo das 09:00 as 13:30</strong></p>
            </div>
        </section>

        <section className="storeOne">
            <div className="infoLoja right">
            <h1>Supermercado Hort-Fruit 03</h1>
                <p><strong>Endereço:</strong> Rua ficticia lorem, Nº 999</p>
                <p><strong>Segunda a Sabado das 07:30 as 22:00<br />
                Domingo das 09:00 as 13:30</strong></p>
            </div>
            <div className="image">
                <Image src={logoLoja} alt="" />
            </div>
        </section>

        <section className="storeOne">
            <div className="image">
                <Image src={logoLoja} alt="" />
            </div>
            <div className="infoLoja">
            <h1>Supermercado Hort-Fruit 04</h1>
                <p><strong>Endereço:</strong> Rua ficticia lorem, Nº 999</p>
                <p><strong>Segunda a Sabado das 07:30 as 22:00<br />
                Domingo das 09:00 as 13:30</strong></p>
            </div>
        </section>

      </Main>
    </Container>
  );
}
