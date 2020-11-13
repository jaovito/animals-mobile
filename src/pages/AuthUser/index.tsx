import React, { useContext, useEffect, useState } from 'react';
import {ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Context} from '../../context/AuthContext'

import { Container, Title, Email, Password, InputView, AccountOptions, CreateAccount, ButtonSubmitTrue, ButtonTextTrue, ButtonSubmitFalse } from './styles';
import Background from '../../components/Background'
import { TouchableOpacity } from 'react-native';
import { DisabledButton } from '../CreateAnimal/styles';

const AuthUser: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const {navigate} = useNavigation()

  const {handleLogin} = useContext(Context)

  useEffect(() => {
    if (email && password) {
      setDisabled(false)
    }
  }, [email,
    password])

  async function handleDoLogin() {
    setLoading(true)
    setDisabled(true)
    await handleLogin(email, password)
    setDisabled(false)
    setLoading(false)
  }

  function handleGoCreateUser() {
    navigate('CreateUser')
  }

  function handleGoForgotUser() {
    navigate('ForgotUser')
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
        <Title>Bem-vindo</Title>
        <InputView>
          <Email value={email} autoCapitalize="none" onChangeText={setEmail} placeholder='E-mail' textContentType='emailAddress' keyboardType='email-address' />
          <Password value={password} onChangeText={setPassword} placeholder='Senha' textContentType='password' secureTextEntry={true} />
        </InputView>

        <AccountOptions>
          <TouchableOpacity onPress={handleGoCreateUser}>
            <CreateAccount>Criar conta</CreateAccount>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleGoForgotUser}>
            <CreateAccount>Esqueceu a senha?</CreateAccount>
          </TouchableOpacity>
        </AccountOptions>

        {disabled ? (
          <ButtonSubmitFalse>
            {loading ? <ActivityIndicator color="#FFF" size={30} /> : <ButtonTextTrue>Entrar</ButtonTextTrue>}
          </ButtonSubmitFalse>
        ) : (
          <ButtonSubmitTrue onPress={handleDoLogin}>
            {loading ? <ActivityIndicator color="#FFF" size={30} /> : <ButtonTextTrue>Entrar</ButtonTextTrue>}
          </ButtonSubmitTrue>
        )}
      </Background>
      

    </Container>
  );
}

export default AuthUser;