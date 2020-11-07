import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Email, Password, InputView, AccountOptions, CreateAccount, ButtonSubmitTrue, ButtonTextTrue } from './styles';
import Background from '../../components/Background'
import { TouchableOpacity } from 'react-native';

const AuthUser: React.FC = () => {

  const {navigate} = useNavigation()

  function handleGoCreateUser() {
    navigate('CreateUser')
  }


  return (
    <Container 
      colors={['#ED4D08', '#ED9108']}
     
    >
      <Background>
        <Title>Bem-vindo</Title>
        <InputView>
          <Email placeholder='E-mail' textContentType='emailAddress' keyboardType='email-address' />
          <Password placeholder='Senha' textContentType='password' secureTextEntry={true} />
        </InputView>

        <AccountOptions>
          <TouchableOpacity onPress={handleGoCreateUser}>
            <CreateAccount>Criar conta</CreateAccount>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <CreateAccount>Esqueceu a senha?</CreateAccount>
          </TouchableOpacity>
        </AccountOptions>

        <ButtonSubmitTrue onPress={() => {}}>
          <ButtonTextTrue>Entrar</ButtonTextTrue>
        </ButtonSubmitTrue>
      </Background>
      

    </Container>
  );
}

export default AuthUser;