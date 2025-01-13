import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Redirect } from '../../components/Redirect';

export default function Page404(){
  return (
  <Container>
  <h1>Essa página não existe!</h1>
    <Redirect />
  </Container>
  );
}
