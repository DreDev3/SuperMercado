import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { Section, FooterGlobal, PageUp } from './styled';
import mastercard from '../../images/cards/mastercard.png';
import visa from '../../images/cards/visa.png';
import hipercard from '../../images/cards/hipercard.png';
import alelo from '../../images/cards/alelo.png';
import sodexo from '../../images/cards/sodexo.png';
import pageUp from '../../images/subir.png';

export default function Footer() {
  const scrollToLogo = () => {
    const logoElement = document.getElementById('logo');
    logoElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
        <PageUp>
        <HashLink onClick={scrollToLogo}>
            <img src={pageUp} alt="Subir" />
        </HashLink>
    </PageUp>

      <Section className="final">
        <div className="payForm">
          <h4>Formas de pagamento</h4>
          <div className="cards">
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={hipercard} alt="hipercard" />
            <img src={alelo} alt="alelo" />
            <img src={sodexo} alt="sodexo" />
          </div>
        </div>
        <div className="minor">
          LEI Nº 8.069, DE 13 DE JULHO DE 1990.

          Crime venda de bebidas alcoólicas a crianças e adolescentes

          Art. 243. Vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, de qualquer forma, a
          criança ou a adolescente, bebida alcoólica ou, sem justa causa, outros produtos cujos componentes possam
          causar dependência física ou psíquica: (Redação dada pela Lei nº 13.106, de 2015)

          Pena - detenção de 2 (dois) a 4 (quatro) anos, e multa, se o fato não constitui crime mais grave. (Redação
          dada pela Lei nº 13.106, de 2015)
        </div>
      </Section>
      <FooterGlobal>

        <p>&copy; Supermercado Hort-Fruit | Todos os direitos reservados | Desenvlvido por <a
          href="https://github.com/DreDev3/">DreDev3</a></p>
      </FooterGlobal>
    </>
  );
}
