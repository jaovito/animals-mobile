import React, { useContext, useEffect, useRef, useState } from 'react';
import {ActivityIndicator, Animated, Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Context} from '../../context/AuthContext'

import { Container, Title, Email, Password, InputView, AccountOptions, CreateAccount, ButtonSubmitTrue, ButtonTextTrue, ButtonSubmitFalse, Image, Form } from './styles';
import Background from '../../components/Background'
import { TouchableOpacity } from 'react-native';

import animalsImg from '../../assets/icons/Animals.png'

const AuthUser: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const {navigate} = useNavigation()

  const {handleLogin} = useContext(Context)

  const height = Dimensions.get('window').height / 5
  const heightForm = -Dimensions.get('window').height /4
  const opacityAnimation = useRef(new Animated.Value(0)).current
  const opacityFormAnimation = useRef(new Animated.Value(0)).current
  const topValue = useRef(new Animated.Value(height)).current
  const topFormValue = useRef(new Animated.Value(heightForm)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(topValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(topFormValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityFormAnimation, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

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
        <Image 
        style={{
          opacity: opacityAnimation,
          transform: [
            {translateX: 0},
            {translateY: topValue},
          ]
        }}
          source={animalsImg}
        />

        <Form
          style={{
            opacity: opacityFormAnimation,
            transform: [
              {translateY: topFormValue}
            ]
          }}
        >
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
        </Form>
      </Background>
      

    </Container>
  );
}

export default AuthUser;