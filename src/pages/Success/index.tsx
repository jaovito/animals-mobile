import React, { useContext, useEffect, useState } from 'react';
import {ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Container, Title, SubTitle, ButtonSubmitTrue, ButtonTextTrue } from './styles';
import Background from '../../components/Background'

const Success: React.FC = () => {

  const {navigate} = useNavigation()

  async function handleGoLogin() {
    navigate('AuthUser')
  }

  return (
    <Container 
      colors={['#ED4D08', '#ED9108']}
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
    >
      <Background>
        <Title>Senha alterada com sucesso!</Title>
        <SubTitle>Agora é só entrar com seu e-mail e senha, fácil não? {'\n'} Clique no botão abaixo para fazer o login.</SubTitle>
       
          <ButtonSubmitTrue onPress={handleGoLogin}>
            <ButtonTextTrue>Entrar</ButtonTextTrue>
          </ButtonSubmitTrue>
      </Background>

    </Container>
  );
}

export default Success;