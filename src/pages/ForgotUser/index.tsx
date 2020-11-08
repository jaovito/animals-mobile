import React from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import kittyImg from '../../assets/icons/catChar.png'

import { 
    Container,
    Background,
    Title,
    SubTitle,
    Cat,
    Email,
    Button,
    ButtonTitle
 } from './styles';

const ForgotUser: React.FC = () => {
  return (
      <Container colors={['#ED4D08', '#ED9108']}
        start={{
            x: 0,
            y: 0
        }}
        end={{
            x: 1,
            y: 1
        }}
      >
        <Background source={backgroundImg}>
            <Title>Esqueceu a senha?</Title>
            <SubTitle>Não se preocupe, basta inserir os dados abaixo.</SubTitle>
            <Cat source={kittyImg} width={100} height={100} />

            <Email placeholder='E-mail' />
            <Button>
                <ButtonTitle>Próximo</ButtonTitle>
            </Button>
        </Background>
      </Container>
  );
}

export default ForgotUser;